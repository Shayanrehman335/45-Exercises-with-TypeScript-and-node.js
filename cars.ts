#!/usr/bin/env node

import { features } from "process";
import { isModuleNamespaceObject } from "util/types";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: {[key: string]: any } []):
 object {
    
    const CarInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return CarInfo;
 };
 let answer = storeCarInfo('Honda' , 'Accord', {color: 'metallic'}, {features: ['ABS', 'automatic']});

 console.log(answer);

 