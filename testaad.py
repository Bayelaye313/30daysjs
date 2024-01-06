import unittest

from add import add_numbers

class TestAddNumbers(unittest.TestCase):
    def test_add_numbers(self):
        # Test case 1: Numbers are integers
        result = add_numbers(3, 4)
        self.assertEqual(result, 8)

        # Test case 2: Numbers are floats
        result = add_numbers(2.5, 1.5)
        self.assertEqual(result, 4.0)

        # Test case 3: One number is an integer, the other is a float
        result = add_numbers(5, 2.5)
        self.assertEqual(result, 7.5)

        # Test case 4: Testing for ValueError when non-numeric input is provided
        with self.assertRaises(ValueError):
            add_numbers("abc", 2)

if __name__ == '__main__':
    unittest.main()
