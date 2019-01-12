.. index:: struct

.. role:: bluesup
.. role:: redesup

struct.yaml :redsup:`new`
#########################

In dieser Konfigurationsdatei können eigene Item-Strukturen angelegt werden, die über das **struct** Attribut als Template
verwendet werden können.

Hierbei gibt die oberste Ebene den Namen der Templates an. Darunter können Item Strukturen definiert werden, wie man es
auch in der Item Definition in den items.yaml Dateien machen würde. Das folgende Beispiel zeigt die Definition von zwei
Strukturen (**my_struct_01** und **my_struct_02**):

.. code-block:: yaml

    my_struct_01:
        name: Name der Item Struktur

        item_01:
            name: Erstes Item
            type: num
            ...
        item_02:
            name: Zweites Item
            type: bool
            ...
            subitem:
                name: Sub-Item
                type: str
                ...


    my_struct_02:
        name: Name der zweiten Item Struktur
        type: bool

        item_a:
            name: Item A
            type: num
            ...
        item_b:
            name: Item B
            type: str
            ...

