#!/usr/bin/env node

import { readFile, appendFile, readdir, } from "fs/promises";
import { join, resolve } from "path";

const param = process.argv.slice(2);