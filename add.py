def add_numbers(a, b):
    """
    Cette fonction ajoute deux nombres.

    :param a: Le premier nombre à additionner.
    :type a: int or float

    :param b: Le deuxième nombre à additionner.
    :type b: int or float

    :return: La somme des deux nombres.
    :rtype: int or float

    :raises ValueError: Si l'un des paramètres n'est pas un nombre.
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise ValueError("Les deux paramètres doivent être des nombres.")

    return a + b
