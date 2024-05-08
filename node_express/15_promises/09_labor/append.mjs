#!/usr/bin/env node
import { readFile, appendFile } from 'fs';

import { join, resolve } from "path";

const param = process.argv.slice(2);
