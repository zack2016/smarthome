#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
#  Copyright 2019-     Martin Sinn                          m.sinn@gmx.de
#########################################################################
#  This file is part of SmartHomeNG
#
#  SmartHomeNG is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#
#  SmartHomeNG is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with SmartHomeNG  If not, see <http://www.gnu.org/licenses/>.
#########################################################################

"""
This library implements the multi language support of SmartHomeNG.

It is used in
  - lib.module
  - lib.shtime
  - lib.model.module
  - lib.model.smartplugin

The shortcut _(...) for translate(...) is defined in class SmartPluginWebIf()
SmartPluginWebIf() which is defined in lib.model.smartplugin.py

If is a replacement when rendering templates using Jinja2:

    tplenv.globals['_'] = self.translate

"""

import logging
import os

from lib.constants import (YAML_FILE)
import lib.shyaml as shyaml

logger = logging.getLogger(__name__)

_base_dir = ''
_default_language = ''

_fallback_language_order = ''
_global_translations = {}
_translations = {}
_translation_files = {}


def initialize_translations(base_dir, default_language, fallback_language_order):
    """
    Initialize the multi-language support

    :param base_dir: Base directory of SmartHomeNG
    :param default_language: language to be used for translations: 'de', 'en', 'fr', ...
    :param fallback_language_order: string with the fallback langauges (komma seperated)

    """
    global _base_dir

    _base_dir = base_dir

    set_default_language(default_language)
    set_fallback_language_order(fallback_language_order)
    load_translations('global', from_dir='bin', translation_id='global')
    return


def set_default_language(language):
    """
    Set language to be used for translations

    :param language: language to be used for translations: 'de', 'en', 'fr', ...

    """
    global _default_language

    _default_language = language.lower()
    logger.debug("Default language set to '{}'".format(_default_language))
    return


def set_fallback_language_order(language_order):
    """
    Set fallback languages and their order

    Fallback languages are used, if a translation for the selected default_language is not available

    :param language_order: string with the fallback langauges (komma seperated)

    """
    global _fallback_language_order

    _fallback_language_order = language_order.lower().split(',')
    logger.debug("Fallback language order set to '{}'".format(_fallback_language_order))
    return


def load_translations(translation_type='global', from_dir='bin', translation_id='global'):
    """
    Load global or plugin-specific translations from a locale.yaml file

    :param translation_type: 'global' or 'plugin'
    :param from_dir: 'bin' (for global) or 'plugins/<plugin name>'

    :return: loaded translations as s dict
    """
    global _translations

    trans = {}
    relative_filename = os.path.join(from_dir, 'locale' + YAML_FILE)
    filename = os.path.join(_base_dir, relative_filename)
    trans_dict = shyaml.yaml_load(filename, ordered=False, ignore_notfound=True)
    if trans_dict != None:
        if translation_type == 'global':
            for translation_section in trans_dict.keys():
                if translation_section.endswith('_translations'):
                    trans_id = translation_section.split('_')[0].replace('.', '/')
                    trans = trans_dict.get(translation_section, {})
                    _translations[trans_id] = trans
                    logger.info("Loading {} translations (id={}) from {}".format(translation_type, trans_id, relative_filename))
                    logger.debug(" - translations = {}".format(trans))
        else:
            trans = trans_dict.get(translation_type+'_translations', {})
            logger.info("Loading {} translations (id={}) from {}".format(translation_type, translation_id, relative_filename))
            if _translations.get(translation_id, None) is not None:
                logger.info("Duplicate identifier '{}' used for translation_type '{}' to load from '{}' - translations not loaded".format(translation_id, translation_type, from_dir))
                return trans
            _translations[translation_id] = trans
            logger.debug(" - translations = {}".format(trans))

        _translation_files[translation_id] = {}
        _translation_files[translation_id]['type'] = translation_type
        _translation_files[translation_id]['filename'] = filename
    return trans


def reload_translations():
    """
    Reload translations for existing translation_ids - to test new translations without having to restart SmartHomeNG
    """
    logger.info("reload_translations")
    for id in _translation_files:
        translation_type = _translation_files[id]['type']
        filename = _translation_files[id]['filename']
        trans_dict = shyaml.yaml_load(filename, ordered=False, ignore_notfound=True)
        if trans_dict != None:
            if translation_type == 'global':
                for translation_section in trans_dict.keys():
                    if translation_section.endswith('_translations'):
                        id = translation_section.split('_')[0].replace('.', '/')
                        trans = trans_dict.get(translation_section, {})
                        logger.info("Reloading {} translations (id={}) from {}".format(translation_type, id, filename))
                        _translations[id] = trans
            else:
                trans = trans_dict.get(translation_type+'_translations', {})
                logger.info("Reloading {} translations (id={}) from {}".format(translation_type, id, filename))
                _translations[id] = trans
    return


def _get_translation(translation_lang, txt, additional_translations=None):
    """
    Returns translated text from for a specified language from additional_translations or global_translations

    :param translation_lang: Language to be used for translation
    :param txt: Text to be translated
    :param additional_translations: Additional translation definitions (e.g. for plugins)
    :return: translated text or '' if translation is not found
    """

    translations = {}
    if additional_translations is not None:
        #translations = additional_translations.get(txt, {})
        if additional_translations in _translations.keys():
            translations = _translations[additional_translations].get(txt, {})
        else:
            logger.warning("Trying to use undefined aditional_translations '{}'".format(additional_translations))

    if translations == {}:
        if 'global' in _translations.keys():
            translations = _translations['global'].get(txt, {})
        else:
            logger.error("Global translations not loaded")
    else:
        logger.debug("Using additional_translations for text '{}' = {}".format(txt, translations))

    return translations.get(translation_lang, None)


def translate(txt, vars= None, additional_translations=None):
    """
    Returns translated text

    :param txt: TEXT TO TRANSLATE
    :param vars: dict with variables to replace in the translated text
    :param additional_translations: ID for additional translations (if None, only global translations are used)

    :return: Translated text
    """
    global _fallback_language_order
    txt = str(txt)

    translated_txt = _get_translation(_default_language, txt, additional_translations=additional_translations)
    if translated_txt is None:
        logger.debug("translation of '{}' to language '{}' not found -> using fallback languages".format(txt, _default_language))
        if len(_fallback_language_order) > 0:
            for fallback_language in _fallback_language_order:
                translated_txt = _get_translation(fallback_language, txt, additional_translations=additional_translations)
                if translated_txt is None:
                    logger.debug(" - No translation found for fallback_language '{}'".format(fallback_language))
                else:
                    break

        if translated_txt is None:
            translated_txt = txt
            logger.info(" - No translation found for '{}' -> using original text".format(txt))

    if translated_txt == '=':
        translated_txt = txt
    logger.debug("Translation '{}' to '{}' -> '{}'".format(txt, _default_language, translated_txt))

    if vars is not None:
        # replace parameters in the translated text
        if isinstance(vars, dict):
            logger.info("translate: Trying to use parameters {} for string '{}'".format(vars, translated_txt))
            try:
                translated_txt = translated_txt.format(**vars)
            except Exception as e:
                logger.error("translate: Could not fill in variables {}. Exception: {}".format(vars, e))
        else:
            logger.error("translate: Invalid vars for string {} -> vars must be a dict".format(txt))

    return translated_txt
