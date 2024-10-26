# Benchmark Results

- Tested on Node.js 22.8.0

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

- Tested on Deno 2.0.3

```bash
LEVELS | KEYS | LOOPS | WEIGHTS
1      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN         | MAX             | MEAN        | TOTAL
prettyoutput2.x  | 18µs 476ns  | 3ms 390µs 701ns | 70µs 381ns  | 7ms 38µs 168ns
prettyoutput1.x  | 14µs 507ns  | 973µs 152ns     | 47µs 263ns  | 4ms 726µs 301ns
prettyjson       | 23µs 321ns  | 808µs 283ns     | 43µs 271ns  | 4ms 327µs 120ns
util.inspect     | 73µs 123ns  | 2ms 372µs 152ns | 171µs 941ns | 17ms 194µs 174ns
@poppinss/dumper | 608µs 105ns | 2ms 663µs 628ns | 678µs 277ns | 67ms 827µs 730ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
2      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN            | MAX             | MEAN           | TOTAL
prettyoutput2.x  | 100µs 387ns    | 1ms 970µs 697ns | 145µs 995ns    | 14ms 599µs 510ns
prettyoutput1.x  | 103µs 796ns    | 553µs 780ns     | 148µs 466ns    | 14ms 846µs 681ns
prettyjson       | 157µs 413ns    | 635µs 726ns     | 195µs 748ns    | 19ms 574µs 886ns
util.inspect     | 428µs 76ns     | 1ms 75µs 148ns  | 515µs 504ns    | 51ms 550µs 429ns
@poppinss/dumper | 5ms 984µs 27ns | 7ms 190µs 400ns | 6ms 320µs 24ns | 632ms 2µs 490ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
3      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN               | MAX              | MEAN              | TOTAL
prettyoutput2.x  | 1ms 598µs 706ns   | 34ms 286µs 177ns | 2ms 277µs 478ns   | 227ms 747µs 847ns
prettyoutput1.x  | 1ms 686µs 945ns   | 2ms 606µs 620ns  | 1ms 846µs 630ns   | 184ms 663µs 72ns
prettyjson       | 4ms 2µs 402ns     | 5ms 213µs 655ns  | 4ms 650µs 925ns   | 465ms 92µs 541ns
util.inspect     | 18ms 644µs 717ns  | 24ms 788µs 706ns | 19ms 650µs 549ns  | 1s 965ms 54µs 975ns
@poppinss/dumper | 118ms 811µs 577ns | 195ms 230µs 57ns | 126ms 141µs 627ns | 12s 614ms 162µs 743ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN               | MAX               | MEAN              | TOTAL
prettyoutput2.x  | 11ms 713µs 331ns  | 222ms 993µs 591ns | 15ms 336µs 940ns  | 1s 533ms 694µs 85ns
prettyoutput1.x  | 14ms 35µs 614ns   | 72ms 240µs 496ns  | 22ms 85µs 895ns   | 2s 208ms 589µs 505ns
prettyjson       | 20ms 259µs 747ns  | 38ms 637µs 814ns  | 23ms 68µs 862ns   | 2s 306ms 886µs 209ns
util.inspect     | 107ms 939µs 701ns | 175ms 534µs 421ns | 120ms 252µs 846ns | 12s 25ms 284µs 627ns
@poppinss/dumper | 628ms 650µs 438ns | 701ms 14µs 184ns  | 653ms 754µs 259ns | 65s 375ms 425µs 971ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 200   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN               | MAX                  | MEAN              | TOTAL
prettyoutput2.x  | 13ms 596µs 198ns  | 212ms 720µs 713ns    | 19ms 6µs 194ns    | 3s 801ms 238µs 956ns
prettyoutput1.x  | 25ms 585µs 417ns  | 34ms 576µs 901ns     | 28ms 790µs 201ns  | 5s 758ms 40µs 242ns
prettyjson       | 33ms 281µs 345ns  | 99ms 26µs 222ns      | 38ms 586µs 949ns  | 7s 717ms 389µs 937ns
util.inspect     | 179ms 522µs 739ns | 275ms 245µs 952ns    | 200ms 589µs 187ns | 40s 117ms 837µs 537ns
@poppinss/dumper | 830ms 80µs 60ns   | 1s 406ms 614µs 734ns | 892ms 287µs 663ns | 178s 457ms 532µs 664ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
5      | 10   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN               | MAX               | MEAN              | TOTAL
prettyoutput2.x  | 7ms 6µs 153ns     | 123ms 716µs 35ns  | 9ms 894µs 693ns   | 989ms 469µs 371ns
prettyoutput1.x  | 12ms 686µs 430ns  | 15ms 474µs 444ns  | 13ms 704µs 676ns  | 1s 370ms 467µs 684ns
prettyjson       | 8ms 905µs 226ns   | 12ms 247µs 493ns  | 9ms 928µs 813ns   | 992ms 881µs 351ns
util.inspect     | 88ms 446µs 459ns  | 154ms 773µs 246ns | 91ms 387µs 814ns  | 9s 138ms 781µs 424ns
@poppinss/dumper | 435ms 155µs 386ns | 818ms 443µs 150ns | 490ms 592µs 135ns | 49s 59ms 213µs 547ns
--------------------------------------------------------------------------------------------------------------

```

- Tested on Bun 1.1.33

```bash
LEVELS | KEYS | LOOPS | WEIGHTS
1      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN         | MAX             | MEAN        | TOTAL
prettyoutput2.x  | 17µs 80ns   | 2ms 536µs 159ns | 67µs 954ns  | 6ms 795µs 466ns
prettyoutput1.x  | 22µs 863ns  | 1ms 264µs 908ns | 59µs 706ns  | 5ms 970µs 697ns
prettyjson       | 35µs 263ns  | 942µs 538ns     | 66µs 961ns  | 6ms 696µs 185ns
util.inspect     | 68µs 793ns  | 3ms 622µs 98ns  | 141µs 207ns | 14ms 120µs 735ns
@poppinss/dumper | 236µs 879ns | 3ms 378µs 710ns | 329µs 845ns | 32ms 984µs 516ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
2      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN            | MAX             | MEAN            | TOTAL
prettyoutput2.x  | 198µs 487ns    | 2ms 92µs 596ns  | 333µs 489ns     | 33ms 348µs 984ns
prettyoutput1.x  | 227µs 491ns    | 600µs 127ns     | 293µs 999ns     | 29ms 399µs 932ns
prettyjson       | 287µs 684ns    | 2ms 820µs 915ns | 456µs 966ns     | 45ms 696µs 639ns
util.inspect     | 633µs 945ns    | 3ms 230µs 571ns | 884µs 791ns     | 88ms 479µs 165ns
@poppinss/dumper | 5ms 30µs 141ns | 7ms 131µs 558ns | 5ms 358µs 498ns | 535ms 849µs 891ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
3      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN             | MAX             | MEAN             | TOTAL
prettyoutput2.x  | 1ms 165µs 116ns | 4ms 10µs 286ns  | 1ms 465µs 203ns  | 146ms 520µs 372ns
prettyoutput1.x  | 1ms 395µs 81ns  | 3ms 483µs 373ns | 1ms 655µs 757ns  | 165ms 575µs 722ns
prettyjson       | 1ms 949µs 934ns | 4ms 597µs 134ns | 2ms 337µs 405ns  | 233ms 740µs 578ns
util.inspect     | 4ms 483µs 39ns  | 7ms 858µs 100ns | 5ms 533µs 428ns  | 553ms 342µs 852ns
@poppinss/dumper | 31ms 38µs 566ns | 42ms 404µs 90ns | 34ms 515µs 192ns | 3s 451ms 519µs 286ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN               | MAX               | MEAN             | TOTAL
prettyoutput2.x  | 14ms 123µs 691ns  | 27ms 896µs 374ns  | 18ms 816µs 83ns  | 1s 881ms 608µs 300ns
prettyoutput1.x  | 14ms 887µs 782ns  | 73ms 543µs 584ns  | 21ms 600µs 374ns | 2s 160ms 37µs 416ns
prettyjson       | 20ms 64µs 772ns   | 68ms 799µs 944ns  | 23ms 276µs 153ns | 2s 327ms 615µs 325ns
util.inspect     | 53ms 850µs 844ns  | 62ms 864µs 214ns  | 57ms 144µs 866ns | 5s 714ms 486µs 630ns
@poppinss/dumper | 330ms 868µs 996ns | 451ms 150µs 534ns | 354ms 61µs 74ns  | 35s 406ms 107µs 427ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
4      | 20   | 200   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN               | MAX               | MEAN              | TOTAL
prettyoutput2.x  | 13ms 194µs 98ns   | 24ms 652µs 316ns  | 16ms 671µs 684ns  | 3s 334ms 336µs 933ns
prettyoutput1.x  | 14ms 190µs 590ns  | 26ms 468µs 146ns  | 18ms 822µs 714ns  | 3s 764ms 542µs 856ns
prettyjson       | 14ms 483µs 809ns  | 22ms 6µs 178ns    | 17ms 136µs 7ns    | 3s 427ms 201µs 500ns
util.inspect     | 51ms 382µs 703ns  | 106ms 501µs 192ns | 57ms 965µs 435ns  | 11s 593ms 87µs 185ns
@poppinss/dumper | 311ms 349µs 737ns | 396ms 897µs 699ns | 325ms 327µs 790ns | 65s 65ms 558µs 108ns
--------------------------------------------------------------------------------------------------------------


LEVELS | KEYS | LOOPS | WEIGHTS
5      | 10   | 100   | serializable: 0.9    array: 0.3    object: 0.5    multilineString: 0.3    error: 0.2

NAME             | MIN              | MAX               | MEAN              | TOTAL
prettyoutput2.x  | 7ms 111µs 215ns  | 14ms 286µs 583ns  | 8ms 934µs 104ns   | 893ms 410µs 439ns
prettyoutput1.x  | 7ms 475µs 762ns  | 14ms 562µs 406ns  | 9ms 410µs 206ns   | 941ms 20µs 631ns
prettyjson       | 6ms 259µs 940ns  | 10ms 413µs 521ns  | 7ms 652µs 607ns   | 765ms 260µs 743ns
util.inspect     | 31ms 283µs 206ns | 38ms 796µs 253ns  | 33ms 216µs 525ns  | 3s 321ms 652µs 537ns
@poppinss/dumper | 171ms 17µs 727ns | 806ms 700µs 384ns | 193ms 648µs 421ns | 19s 364ms 842µs 107ns
--------------------------------------------------------------------------------------------------------------

```