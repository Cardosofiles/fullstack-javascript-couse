import { inline } from "./inline.js"; //the file name must be the same as the name in the function
import defaultInline from "./inline.js"; //the file name can be random

import { group, exportDefault } from "./non-line.js";

inline();
defaultInline();

group();
exportDefault();
