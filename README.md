# Для Яндекс
#### Результат можно посмотреть по ссылке https://talifa.github.io/
#### Или http://embed.plnkr.co/mVP13QSCmIdzAKYew6wB/
Задание состоит в том, чтобы повторить интерактивный график с примера и внести в него некоторые изменения. Чтобы выполнить все пункты задания, вам понадобится разобраться с основами работы библиотеки d3.js, которую в Яндексе используют для визуализации данных.

1) Возьмите за образец вот этот пример использования библиотеки d3.js: https://bl.ocks.org/mbostock/3885705
2) Растяните график по вертикали до 3000 пикселей, чтобы он занял несколько экранов
3) Добавьте изменение цвета столбиков при скролле: при загрузке страницы столбики должны быть залиты зелёным цветом, а при скролле должны постепенно менять цвет заливки на красный
4) Закрепите контрол сортировки в верхнем правом углу, чтобы он перемещался вместе с окном при скролле
5) Измените непрозрачность полосок (столбиков, баров) на графике: она должна составлять 0,5 (полоски должны стать полупрозрачными)
6) Измените внешний вид подписей на странице. Весь текст должен иметь цвет #999999 и размер 20 пикселей. Подписи по оси Х должны иметь полужирное начертание.
7) Поверните график на 90 градусов, чтобы полоски располагались горизонтально, а не вертикально. Поворот нужно выполнить с помощью d3.js (работа с осями). Поворот средствами CSS (rotate) приведёт к тому, что график перестанет помещаться на странице, а подписи на осях повернутся вместе с элементом — это не тот результат, который нужен.

Сортировка, реализованная в изначальном примере, после всех манипуляций должна работать. Итоговая работа должна выглядеть вот так: https://youtu.be/mY7RaJSxzL4. Обратите внимание на смену цвета при скролле и на фиксированное положение контрола "Sort values"



