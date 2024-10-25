# Benchmark Results

Tested on Node.js 22.8.0

```bash
LEVELS | KEYS | LOOPS | WEIGHTS
1      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN          | MAX                | MEAN          | TOTAL
prettyoutput     | 18 µs 292 ns | 5 ms 996 µs 176 ns | 88 µs 760 ns  | 8 ms 876 µs 5 ns
prettyoutputV1   | 26 µs 736 ns | 1 ms 381 µs 413 ns | 55 µs 993 ns  | 5 ms 599 µs 310 ns
prettyjson       | 25 µs 998 ns | 877 µs 638 ns      | 57 µs 508 ns  | 5 ms 750 µs 877 ns
util.inspect     | 35 µs 764 ns | 491 µs 980 ns      | 54 µs 609 ns  | 5 ms 460 µs 916 ns
@poppinss/dumper | 93 µs 48 ns  | 2 ms 754 µs 60 ns  | 176 µs 986 ns | 17 ms 698 µs 672 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
2      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN           | MAX                | MEAN              | TOTAL
prettyoutput     | 94 µs 535 ns  | 2 ms 707 µs 98 ns  | 270 µs 539 ns     | 27 ms 53 µs 950 ns
prettyoutputV1   | 107 µs 589 ns | 913 µs 937 ns      | 240 µs 817 ns     | 24 ms 81 µs 763 ns
prettyjson       | 195 µs 550 ns | 2 ms 563 µs 449 ns | 381 µs 570 ns     | 38 ms 157 µs 35 ns
util.inspect     | 232 µs 857 ns | 1 ms 508 µs 967 ns | 403 µs 818 ns     | 40 ms 381 µs 825 ns
@poppinss/dumper | 675 µs 850 ns | 2 ms 260 µs 461 ns | 1 ms 53 µs 976 ns | 105 ms 397 µs 684 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
3      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                | MAX                 | MEAN               | TOTAL
prettyoutput     | 1 ms 84 µs 383 ns  | 20 ms 420 µs 119 ns | 1 ms 540 µs 12 ns  | 154 ms 1 µs 285 ns
prettyoutputV1   | 1 ms 312 µs 858 ns | 5 ms 213 µs 692 ns  | 1 ms 728 µs 479 ns | 172 ms 847 µs 941 ns
prettyjson       | 2 ms 987 µs 838 ns | 3 ms 981 µs 315 ns  | 3 ms 317 µs 193 ns | 331 ms 719 µs 335 ns
util.inspect     | 3 ms 99 µs 388 ns  | 6 ms 112 µs 564 ns  | 3 ms 522 µs 161 ns | 352 ms 216 µs 137 ns
@poppinss/dumper | 8 ms 164 µs 205 ns | 10 ms 576 µs 993 ns | 9 ms 148 µs 505 ns | 914 ms 850 µs 556 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                  | MAX                  | MEAN                 | TOTAL
prettyoutput     | 18 ms 283 µs 908 ns  | 241 ms 98 µs 229 ns  | 25 ms 911 µs 262 ns  | 2 s 591 ms 126 µs 259 ns
prettyoutputV1   | 26 ms 810 µs 305 ns  | 56 ms 74 µs 596 ns   | 33 ms 141 µs 636 ns  | 3 s 314 ms 163 µs 610 ns
prettyjson       | 24 ms 653 µs 249 ns  | 39 ms 528 µs 442 ns  | 27 ms 683 µs 20 ns   | 2 s 768 ms 302 µs 20 ns
util.inspect     | 57 ms 722 µs 414 ns  | 148 ms 801 µs 898 ns | 63 ms 268 µs 828 ns  | 6 s 326 ms 882 µs 893 ns
@poppinss/dumper | 129 ms 935 µs 666 ns | 203 ms 651 µs 366 ns | 142 ms 398 µs 546 ns | 14 s 239 ms 854 µs 637 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 200   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                 | MAX                  | MEAN                 | TOTAL
prettyoutput     | 12 ms 107 µs 986 ns | 191 ms 330 µs 183 ns | 13 ms 646 µs 407 ns  | 2 s 729 ms 281 µs 526 ns
prettyoutputV1   | 15 ms 680 µs 435 ns | 47 ms 327 µs 98 ns   | 21 ms 797 µs 907 ns  | 4 s 359 ms 581 µs 434 ns
prettyjson       | 13 ms 813 µs 176 ns | 25 ms 128 µs 363 ns  | 15 ms 725 µs 208 ns  | 3 s 145 ms 41 µs 639 ns
util.inspect     | 56 ms 953 µs 22 ns  | 99 ms 774 µs 501 ns  | 62 ms 423 µs 893 ns  | 12 s 484 ms 778 µs 719 ns
@poppinss/dumper | 93 ms 860 µs 536 ns | 185 ms 216 µs 117 ns | 111 ms 245 µs 294 ns | 22 s 249 ms 58 µs 897 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
5      | 10   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                 | MAX                  | MEAN                | TOTAL
prettyoutput     | 1 ms 979 µs 194 ns  | 39 ms 565 µs 948 ns  | 2 ms 873 µs 560 ns  | 287 ms 356 µs 80 ns
prettyoutputV1   | 2 ms 243 µs 448 ns  | 5 ms 409 µs 782 ns   | 3 ms 108 µs 760 ns  | 310 ms 876 µs 21 ns
prettyjson       | 4 ms 570 µs 812 ns  | 8 ms 48 µs 429 ns    | 5 ms 396 µs 733 ns  | 539 ms 673 µs 341 ns
util.inspect     | 24 ms 531 µs 378 ns | 73 ms 51 µs 813 ns   | 30 ms 889 µs 86 ns  | 3 s 88 ms 908 µs 677 ns
@poppinss/dumper | 21 ms 928 µs 624 ns | 144 ms 538 µs 804 ns | 30 ms 811 µs 835 ns | 3 s 81 ms 183 µs 567 ns
--------------------------------------------------------------------------------------------------------------
```