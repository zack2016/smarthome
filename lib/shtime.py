#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2016-       Martin Sinn                         m.sinn@gmx.de
#########################################################################
#  This file is part of SmartHomeNG.
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
#  along with SmartHomeNG. If not, see <http://www.gnu.org/licenses/>.
#########################################################################

try:
    import holidays
    HOLIDAYS_imported = True
except:
    HOLIDAYS_imported = False


import datetime
import dateutil
from dateutil.tz import tzlocal
import logging
import os

import lib.shyaml as shyaml
from lib.constants import (YAML_FILE)
from lib.translation import translate


logger = logging.getLogger(__name__)

_shtime_instance = None    # Pointer to the initialized instance of the shtime class (for use by static methods)

class Shtime:

    _tzinfo = None
    _utctz = None
    _starttime = None
    tz = ''
    holidays = None


    def __init__(self, smarthome):
        self._sh = smarthome
        global _shtime_instance
        if _shtime_instance is not None:
            import inspect
            curframe = inspect.currentframe()
            calframe = inspect.getouterframes(curframe, 4)
            logger.critical("A second 'shtime' object has been created. There should only be ONE instance of class 'Shtime'!!! Called from: {} ({})".format(calframe[1][1], calframe[1][3]))

        _shtime_instance = self

        self._starttime = datetime.datetime.now()

        # set default timezone to UTC
#        global TZ
        self.tz = 'UTC'
        os.environ['TZ'] = self.tz
        self.set_tzinfo(dateutil.tz.gettz('UTC'))


    # -----------------------------------------------------------------------------------------------------
    #   Following (static) method of the class Shtime implement the API for date and time handling in shNG
    # -----------------------------------------------------------------------------------------------------

    @staticmethod
    def get_instance():
        """
        Returns the instance of the Shtime class, to be used to access the shtime-API

       .. code-block:: python

           from lib.shtime import Shtime
           shtime = Shtime.get_instance()

           # to access a method (eg. to get timezone info):
           shtime.tzinfo()


        :return: shinfo instance
        :rtype: object or None
        """
        if _shtime_instance == None:
            return None
        else:
            return _shtime_instance


    def set_tz(self, tz):
        """
        set timezone info from name of timezone
        """
        tzinfo = dateutil.tz.gettz(tz)
        if tzinfo is not None:
#            TZ = tzinfo
            self.tz = tz
            os.environ['TZ'] = self.tz
#             self._tzinfo = TZ
            self.set_tzinfo(tzinfo)
        else:
            logger.warning("Problem parsing timezone: {}. Using UTC.".format(tz))
        return


    def set_tzinfo(self, tzinfo):
        """
        Set the timezone info
        """
        self._tzinfo = tzinfo
        return


    #################################################################
    # Time Methods
    #################################################################
    def now(self):
        """
        Returns the actual time in a timezone aware format

        :return: Actual time for the local timezone
        :rtype: datetime
        """

        if self._tzinfo is None:
            self._tzinfo = dateutil.tz.gettz('UTC')
        # tz aware 'localtime'
        return datetime.datetime.now(self._tzinfo)


    def tz(self):
        """
        Returns the the actual local timezone

        :return: Timezone
        :rtype: str
        """

        return self.tz


    def tzinfo(self):
        """
        Returns the info about the actual local timezone

        :return: Timezone info
        :rtype: object
        """

        return self._tzinfo


    def tzname(self):
        """
        Returns the name about the actual local timezone (e.g. CET)

        :return: Timezone info
        :rtype: object
        """

        return datetime.datetime.now(tzlocal()).tzname()


    def utcnow(self):
        """
        Returns the actual time in GMT

        :return: Actual time in GMT
        :rtype: datetime
        """

        # tz aware utc time
        if self._utctz is None:
            self._utctz = dateutil.tz.gettz('UTC')
        return datetime.datetime.now(self._utctz)


    def utcinfo(self):
        """
        Returns the info about the GMT timezone

        :return: Timezone info
        :rtype: str
        """

        return self._utctz


    def runtime(self):
        """
        Returns the uptime of SmartHomeNG

        :return: Uptime in days, hours, minutes and seconds
        :rtype: str
        """

        return datetime.datetime.now() - self._starttime


    def runtime_as_dict(self):
        """
        Returns the uptime of SmartHomeNG as a dict of integers

        :return: {days, hours, minutes, seconds}
        :rtype: dict
        """

        # return SmarthomeNG runtime
        rt = str(self.runtime())
        daytest = rt.split(' ')
        if len(daytest) == 3:
            days = int(daytest[0])
            hours, minutes, seconds = [float(val) for val in str(daytest[2]).split(':')]
        else:
            days = 0
            hours, minutes, seconds = [float(val) for val in str(daytest[0]).split(':')]
        total_seconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds

        return {'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds, 'total_seconds': total_seconds}


    # -----------------------------------------------------------------------------------------------------
    #   Following methods implement some date handling
    # -----------------------------------------------------------------------------------------------------

    def _datetransform(self, key):
        if isinstance(key, datetime.datetime):
            key = key.date()
        elif isinstance(key, datetime.date):
            key = key
        elif isinstance(key, int) or isinstance(key, float):
            key = datetime.utcfromtimestamp(key).date()
        elif isinstance(key, str):
            try:
                key = dateutil.parser.parse(key).date()
            except (ValueError, OverflowError):
                raise ValueError("Cannot parse date from string '%s'" % key)
        else:
            raise TypeError("Cannot convert type '%s' to date." % type(key))
        return key


    def today(self):
        """
        Return today's date

        :return: date of today
        """
        return datetime.datetime.now().date()


    def tomorrow(self):
        """
        Return tomorrow's date

        :return: date of tomorrow
        """
        return self.today() + datetime.timedelta(days=1)


    def yesterday(self):
        """
        Return yesterday's date

        :return: date of yesterday
        """
        return self.today() + datetime.timedelta(days=-1)


    def current_year(self):
        """
        Return the current year

        :return: year
        """
        return self.today().year


    def weekday(self, date=None):
        """
        Returns the ISO weekday of a given date (or of today, if date is None)

        Return the day of the week as an integer, where Monday is 1 and Sunday is 7. (ISO weekday)

        :param date: date for which the weekday should be returned. If not specified, today is used
        :return: weekday (1=Monday .... 7=Sunday)
        """

        if date:
            dt = self._datetransform(date)
            return dt.isoweekday()
        else:
            return datetime.datetime.now().isoweekday()


    def weekday_name(self, date=None):
        """
        Returns the name of the weekday for a given date

        :param date: date for which the weekday should be returned. If not specified, today is used
        :return: weekday name
        """
        if date:
            dt = self._datetransform(date)
        else:
            dt = self.today()

        wday = self.weekday(dt)
        if wday == 1:
            day = "Montag"
        elif wday == 2:
            day = "Dienstag"
        elif wday == 3:
            day = "Mittowch"
        elif wday == 4:
            day = "Donnerstag"
        elif wday == 5:
            day = "Freitag"
        elif wday == 6:
            day = "Samstag"
        elif wday == 7:
            day = "Sonntag"
        else:
            day = "?"

        return translate(day)


    def _add_custom_holidays(self):
        """
        Add custom holidays from etc/holidays.yaml to the initialized list of holidays

        :return: Number of valid custom holiday definitions
        """
        custom = self.config.get('custom', [])
        count = 0
        if len(custom) > 0:
            for cust_date in custom:
                # {'day': 2, 'month': 12, 'name': "Martin's Geburtstag"}
                if cust_date.get('month', None) and cust_date.get('day', None):
                    cust_dict = {}
                    logger.info('custom holiday (date): {}'.format(cust_date))
                    if cust_date.get('year', None):
                        d = datetime.date(cust_date['year'], cust_date['month'], cust_date['day'])
                        cust_dict[d] = cust_date.get('name', '')
                        count += 1
                    else:
                        for year in self.years:
                            d = datetime.date(year, cust_date['month'], cust_date['day'])
                            cust_dict[d] = cust_date.get('name', '')
                        count += 1
                    self.holidays.append(cust_dict)
                elif cust_date.get('month', None) and cust_date.get('dow', None) and cust_date.get('dow_week', None):
                    cust_dict = {}
                    logger.info('custom holiday (dow): {}'.format(cust_date))
                    month = cust_date.get('month', None)
                    if 0 < cust_date.get('dow', None) < 8:
                        for year in self.years:
                            if cust_date.get('dow_week', None) == 'last':
                                day_last = datetime.date(year, month+1, 1) + datetime.timedelta(days=-1)
                                dow_last = self.weekday(datetime.date(year, month+1, 1) + datetime.timedelta(days=-1))

                                if dow_last >= cust_date.get('dow', None):
                                    d_diff = dow_last - cust_date.get('dow', None)
                                else:
                                    d_diff =  dow_last + 7 - cust_date.get('dow', None)
                                date = day_last - datetime.timedelta(days=d_diff)
                                logger.debug('dow_last: d_diff {} -> {}'.format(d_diff, date))
                            else:
                                day_1st = datetime.date(year, month, 1)
                                dow_1st = self.weekday(datetime.date(year, month, 1))
                                week = int(cust_date.get('dow_week', None))

                                if dow_1st <= cust_date.get('dow', None):
                                    d_diff = cust_date.get('dow', None) - dow_1st
                                else:
                                    d_diff =  7 - dow_1st + cust_date.get('dow', None)
                                d_diff += (week-1) * 7
                                date = day_1st + datetime.timedelta(days=d_diff)
                                logger.debug('dow_1st: d_diff {} -> {}'.format(d_diff, date))
                            cust_dict[date] = cust_date.get('name', '')
                        count += 1
                    self.holidays.append(cust_dict)

        return count


    def _initialize_holidays(self):
        """
        Initialize the holidays according to etc/holidays.yaml for the current year and the two years to come
        """

        if self.holidays is None:
            self._etc_dir = self._sh._etc_dir
            conf_filename = os.path.join(self._sh._etc_dir, 'holidays'+YAML_FILE)
            self.config = shyaml.yaml_load(conf_filename)
            location = self.config.get('location', None)

            # prepopulate holidays for following years
            this_year=self.today().year
            self.years=[this_year, this_year+1, this_year+2]

            if location:
                country=location.get('country', 'DE')
                prov=location.get('province', None)
                state=location.get('state', None)
                self.holidays = holidays.CountryHoliday(country, years=self.years, prov=prov, state=state)
            else:
                self.holidays = holidays.CountryHoliday('US', years=self.years, prov=None, state=None)

            c_logtext = 'not defined'
            c_logcount = ''
            count = self._add_custom_holidays()
            if count > 0:
                c_logcount = ' ' + str(count)
                c_logtext = 'defined'
            logger.warning("Using holidays for country '{}', province '{}', state '{}',{} custom holiday(s) {}".format(self.holidays.country, self.holidays.prov, self.holidays.state, c_logcount, c_logtext))

            logger.info('Defined holidays:')
            for ft in sorted(self.holidays):
                logger.info(' - {}: {}'.format(ft, self.holidays[ft]))

        return


    def is_weekend(self, date=None):
        """
        Returns True, if the date is a holiday

        Note: Easter sunday is not concidered a holiday (since it is a sunday already)!

        :param date: date for which the weekday should be returned. If not specified, today is used
        :return:
        """

        if date:
            dt = self._datetransform(date)
        else:
            dt = self.today()

        self._initialize_holidays()

        return self.weekday(dt) in [6,7]


    def is_holiday(self, date=None):
        """
        Returns True, if the date is a holiday

        Note: Easter sunday is not concidered a holiday (since it is a sunday already)!

        :param date: date for which the weekday should be returned. If not specified, today is used
        :return:
        """

        if date:
            dt = self._datetransform(date)
        else:
            dt = self.today()

        self._initialize_holidays()

        return (dt in self.holidays)


    def holiday_name(self, date=None):
        """
        Returns the name of the holiday, if date is a holiday

        :param date:
        :return:
        """
        if date:
            dt = self._datetransform(date)
        else:
            dt = self.today()

        self._initialize_holidays()

        if self.holidays.get(dt):
            return self.holidays.get(dt)
        else:
            return ''


    def holiday_list(self, year=None):
        """

        :param year:
        :return:
        """
        hl = []
        for h in self.holidays:
            if year is None or h.year == year:
                hl.append({h, self.holidays[h]})
        return hl