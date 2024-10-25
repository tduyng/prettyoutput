# Benchmark Results

Tested on Node.js 22.8.0

```bash
LEVELS | KEYS | LOOPS | WEIGHTS
1      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN           | MAX                | MEAN          | TOTAL
prettyoutput2.x  | 23 µs 499 ns  | 3 ms 728 µs 542 ns | 69 µs 536 ns  | 6 ms 953 µs 675 ns
prettyoutput1.x  | 28 µs 848 ns  | 1 ms 736 µs 951 ns | 85 µs 303 ns  | 8 ms 530 µs 327 ns
prettyjson       | 36 µs 58 ns   | 908 µs 30 ns       | 70 µs 547 ns  | 7 ms 54 µs 745 ns
util.inspect     | 28 µs 981 ns  | 459 µs 106 ns      | 40 µs 707 ns  | 4 ms 70 µs 735 ns
@poppinss/dumper | 114 µs 131 ns | 2 ms 575 µs 153 ns | 179 µs 557 ns | 17 ms 955 µs 713 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
2      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN           | MAX                 | MEAN               | TOTAL
prettyoutput2.x  | 131 µs 718 ns | 4 ms 587 µs 818 ns  | 246 µs 433 ns      | 24 ms 643 µs 307 ns
prettyoutput1.x  | 119 µs 630 ns | 940 µs 881 ns       | 216 µs 533 ns      | 21 ms 653 µs 324 ns
prettyjson       | 238 µs 717 ns | 603 µs 863 ns       | 285 µs 382 ns      | 28 ms 538 µs 216 ns
util.inspect     | 530 µs 891 ns | 11 ms 763 µs 362 ns | 975 µs 365 ns      | 97 ms 536 µs 576 ns
@poppinss/dumper | 846 µs 423 ns | 2 ms 278 µs 167 ns  | 1 ms 180 µs 296 ns | 118 ms 29 µs 642 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
3      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                | MAX                 | MEAN               | TOTAL
prettyoutput2.x  | 530 µs 426 ns      | 12 ms 259 µs 153 ns | 703 µs 841 ns      | 70 ms 384 µs 107 ns
prettyoutput1.x  | 574 µs 848 ns      | 22 ms 517 µs 267 ns | 998 µs 113 ns      | 99 ms 811 µs 369 ns
prettyjson       | 1 ms 227 µs 816 ns | 27 ms 290 µs 539 ns | 1 ms 842 µs 186 ns | 184 ms 218 µs 646 ns
util.inspect     | 2 ms 393 µs 19 ns  | 23 ms 802 µs 16 ns  | 3 ms 342 µs 918 ns | 334 ms 291 µs 831 ns
@poppinss/dumper | 4 ms 303 µs 734 ns | 40 ms 889 µs 616 ns | 6 ms 114 µs 739 ns | 611 ms 473 µs 997 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                 | MAX                  | MEAN                 | TOTAL
prettyoutput2.x  | 12 ms 243 µs 356 ns | 222 ms 802 µs 539 ns | 17 ms 744 µs 516 ns  | 1 s 774 ms 451 µs 606 ns
prettyoutput1.x  | 16 ms 387 µs 533 ns | 69 ms 495 µs 667 ns  | 30 ms 699 µs 468 ns  | 3 s 69 ms 946 µs 831 ns
prettyjson       | 11 ms 977 µs 100 ns | 47 ms 958 µs 496 ns  | 15 ms 725 µs 947 ns  | 1 s 572 ms 594 µs 752 ns
util.inspect     | 72 ms 237 µs 946 ns | 294 ms 121 µs 252 ns | 106 ms 689 µs 767 ns | 10 s 668 ms 976 µs 732 ns
@poppinss/dumper | 98 ms 222 µs 288 ns | 204 ms 667 µs 864 ns | 136 ms 293 µs 68 ns  | 13 s 629 ms 306 µs 870 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 200   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                 | MAX                  | MEAN                | TOTAL
prettyoutput2.x  | 7 ms 28 µs 233 ns   | 131 ms 474 µs 692 ns | 10 ms 672 µs 667 ns | 2 s 134 ms 533 µs 520 ns
prettyoutput1.x  | 12 ms 351 µs 38 ns  | 53 ms 182 µs 39 ns   | 14 ms 6 µs 452 ns   | 2 s 801 ms 290 µs 532 ns
prettyjson       | 16 ms 970 µs 778 ns | 87 ms 212 µs 658 ns  | 22 ms 241 µs 844 ns | 4 s 448 ms 368 µs 942 ns
util.inspect     | 50 ms 442 µs 707 ns | 155 ms 607 µs        | 63 ms 357 µs 164 ns | 12 s 671 ms 432 µs 857 ns
@poppinss/dumper | 59 ms 857 µs 713 ns | 127 ms 393 µs 131 ns | 70 ms 612 µs 330 ns | 14 s 122 ms 466 µs 82 ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
5      | 10   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN                 | MAX                  | MEAN                | TOTAL
prettyoutput2.x  | 3 ms 559 µs 470 ns  | 65 ms 595 µs 645 ns  | 5 ms 180 µs 643 ns  | 518 ms 64 µs 342 ns
prettyoutput1.x  | 3 ms 884 µs 885 ns  | 8 ms 988 µs 718 ns   | 5 ms 265 µs 152 ns  | 526 ms 515 µs 245 ns
prettyjson       | 8 ms 261 µs 138 ns  | 43 ms 302 µs 502 ns  | 9 ms 810 µs 809 ns  | 981 ms 80 µs 940 ns
util.inspect     | 15 ms 816 µs 129 ns | 37 ms 981 µs 965 ns  | 19 ms 218 µs 306 ns | 1 s 921 ms 830 µs 682 ns
@poppinss/dumper | 36 ms 441 µs 751 ns | 126 ms 718 µs 373 ns | 49 ms 236 µs 286 ns | 4 s 923 ms 628 µs 666 ns
--------------------------------------------------------------------------------------------------------------
```