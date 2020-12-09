import React from 'react';
import {Image} from "antd";
import Spiderman from "./Spiderman.jpg";

class Car {
  constructor(name) {
    this.brand = name;
  }
}

function Resume_app(){


        return(
             <div>
                <Image
                    width={2000}
                    src={Spiderman}
                />
            </div>
        )
    }

export default Resume_app;