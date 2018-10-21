import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariantsService {

  public readonly DEFAULT_VARIANT_ID: string = "000";

  private _variants: IVariant[] = [
    {
      id: "000",
      data: {
        info: {
          supplier: "QLOCKGENERATOR",
          model: "Benutzerdefiniert",
        },
        front: {
          width: 450.0,
          height: 450.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.0,
            y: 25.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 25.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 83.5,
            y: 85.5
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 225.0,
            y: 425.0
          }
        }
      }
    },
    {
      id: "100",
      data: {
        info: {
          supplier: "leuchtbildshop.net",
          model: "Wortwecker 23x23 Rahmenlos",
        },
        front: {
          width: 230.0,
          height: 230.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 20.0,
            y: 20.0
          }
        },
        alarm: {
          show: true,
          size: 5.0,
          distance: {
            x: 115.0,
            y: 20.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 47.0,
            y: 48.25
          },
          font: {
            size: 10.0
          }
        },
        logo: {
          text: "",
          size: 3.0,
          distance: {
            x: 115.0,
            y: 210.0
          }
        }
      }
    },
    {
      id: "110",
      data: {
        info: {
          supplier: "leuchtbildshop.net",
          model: "CLT"
        },
        front: {
          width: 500.0,
          height: 500.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 40.0,
            y: 40.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 250.0,
            y: 40.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 94.25,
            y: 92.5
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 250.0,
            y: 460.0
          }
        }
      }
    },
    {
      id: "120",
      data: {
        info: {
          supplier: "leuchtbildshop.net",
          model: "CLT2"
        },
        front: {
          width: 450.0,
          height: 450.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.0,
            y: 25.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 25.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 83.5,
            y: 85.5
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 225.0,
            y: 425.0
          }
        }
      }
    },
    {
      id: "130",
      data: {
        info: {
          supplier: "leuchtbildshop.net",
          model: "50er Classic Rahmenlos"
        },
        front: {
          width: 500.0,
          height: 500.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.0,
            y: 25.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 250.0,
            y: 25.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 75.0,
            y: 75.0
          },
          font: {
            size: 21
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 250.0,
            y: 425.0
          }
        }
      }
    },
    {
      id: "140",
      data: {
        info: {
          supplier: "leuchtbildshop.net",
          model: "50er Classic Ribba"
        },
        front: {
          width: 500.0,
          height: 500.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.0,
            y: 25.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 250.0,
            y: 25.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 75.0,
            y: 75.0
          },
          font: {
            size: 21
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 250.0,
            y: 425.0
          }
        }
      }
    },
    {
      id: "200",
      data: {
        info: {
          supplier: "elomtex",
          model: "Wort-Wecker 200x200"
        },
        front: {
          width: 230.0,
          height: 230.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 21.0,
            y: 21.0
          }
        },
        alarm: {
          show: true,
          size: 5.0,
          distance: {
            x: 115.0,
            y: 21.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 47.0,
            y: 48.25
          },
          font: {
            size: 10.0
          }
        },
        logo: {
          text: "",
          size: 3.0,
          distance: {
            x: 115.0,
            y: 209.0
          }
        }
      }
    },
    {
      id: "300",
      data: {
        info: {
          supplier: "du-kannst-mitspielen.de",
          model: "Bausatz Wortwecker 135x135"
        },
        front: {
          width: 135.0,
          height: 135.0
        },
        minutes: {
          placement: "corner",
          radius: 0.5,
          distance: {
            x: 11.4,
            y: 11.4
          }
        },
        alarm: {
          show: true,
          size: 3,
          distance: {
            x: 67.5,
            y: 11.4
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 24.3,
            y: 24.3
          },
          font: {
            size: 6.0
          }
        },
        logo: {
          text: "",
          size: 2.0,
          distance: {
            x: 67.5,
            y: 123.6
          }
        }
      }
    },
    {
      id: "310",
      data: {
        info: {
          supplier: "du-kannst-mitspielen.de",
          model: "Bausatz 303 Universal"
        },
        front: {
          width: 450.0,
          height: 450.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.0,
            y: 25.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 25.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 83.5,
            y: 85.5
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 225.0,
            y: 425.0
          }
        }
      }
    },
    {
      id: "320",
      data: {
        info: {
          supplier: "du-kannst-mitspielen.de",
          model: "Uhrengehäuse Stripes'n Corners"
        },
        front: {
          width: 450.0,
          height: 450.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.0,
            y: 25.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 25.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 83.5,
            y: 85.5
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 225.0,
            y: 425.0
          }
        }
      }
    },
    {
      id: "330",
      data: {
        info: {
          supplier: "du-kannst-mitspielen.de",
          model: "Gehäuse 42er Classic (Standard)"
        },
        front: {
          width: 450.0,
          height: 450.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 22.5,
            y: 22.5
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 22.5
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 81.82,
            y: 81.82
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 5.0,
          distance: {
            x: 225.0,
            y: 422.5
          }
        }
      }
    },
    {
      id: "340",
      data: {
        info: {
          supplier: "du-kannst-mitspielen.de",
          model: "Gehäuse Wortuhr 90x90"
        },
        front: {
          width: 900.0,
          height: 900.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 68.0,
            y: 68.0
          }
        },
        alarm: {
          show: false,
          size: 22.0,
          distance: {
            x: 450.0,
            y: 68.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 163.64,
            y: 163.64
          },
          font: {
            size: 42.0
          }
        },
        logo: {
          text: "",
          size: 42.0,
          distance: {
            x: 450.0,
            y: 832.0
          }
        }
      }
    },
    {
      id: "400",
      data: {
        info: {
          supplier: "Spaceflakes",
          model: "Wörter-Funkuhr 3"
        },
        front: {
          width: 500.0,
          height: 500.0
        },
        minutes: {
          placement: "horizontal",
          radius: 1.75,
          distance: {
            x: 322.5,
            y: 480.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 20.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 69.0,
            y: 72.88
          },
          font: {
            size: 35.0
          }
        },
        logo: {
          text: "",
          size: 8.0,
          distance: {
            x: 123.5,
            y: 480.0
          }
        }
      }
    },
    {
      id: "500",
      data: {
        info: {
          supplier: "Ulrich Radig",
          model: "Wort Uhr (NEU)"
        },
        front: {
          width: 300.0,
          height: 300.0
        },
        minutes: {
          placement: "corner",
          radius: 0.0,
          distance: {
            x: 10.0,
            y: 10.0
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 150.0,
            y: 10.0
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 26.22,
            y: 28.15
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 8.0,
          distance: {
            x: 150.0,
            y: 280.0
          }
        }
      }
    },
    {
      id: "600",
      data: {
        info: {
          supplier: "Mikrocontroller.net",
          model: "Word Clock"
        },
        front: {
          width: 450.0,
          height: 450.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 25.6,
            y: 25.6
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 225.0,
            y: 25.6
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 84.5,
            y: 85.5
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 8.0,
          distance: {
            x: 225.0,
            y: 224.4
          }
        }
      }
    },
    {
      id: "700",
      data: {
        info: {
          supplier: "bracci.ch",
          model: "QlockWiFive Easy"
        },
        front: {
          width: 485.0,
          height: 485.0
        },
        minutes: {
          placement: "corner",
          radius: 1.0,
          distance: {
            x: 27.5,
            y: 27.5
          }
        },
        alarm: {
          show: false,
          size: 11.5,
          distance: {
            x: 242.5,
            y: 27.5
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 90.351,
            y: 92.502
          },
          font: {
            size: 21.0
          }
        },
        logo: {
          text: "",
          size: 8.0,
          distance: {
            x: 242.5,
            y: 457.5
          }
        }
      }
    },
    {
      id: "710",
      data: {
        info: {
          supplier: "bracci.ch",
          model: "QlockWiFive Mini"
        },
        front: {
          width: 250.0,
          height: 250.0
        },
        minutes: {
          placement: "corner",
          radius: 0.5,
          distance: {
            x: 17.5,
            y: 17.5
          }
        },
        alarm: {
          show: false,
          size: 6.0,
          distance: {
            x: 125.0,
            y: 17.5
          }
        },
        matrix: {
          columns: 11,
          rows: 10,
          distance: {
            x: 48.925,
            y: 50.0
          },
          font: {
            size: 11.0
          }
        },
        logo: {
          text: "",
          size: 4.0,
          distance: {
            x: 125.0,
            y: 232.5
          }
        }
      }
    }
  ]

  constructor() {
  // console.log("VariantService constructor()");
    this.getVariantsGroupedBySupplier();
  }

  getDefaultVariant(): IVariant {
    return this.getVariantById(this.DEFAULT_VARIANT_ID);
  }

  getVariants(): IVariant[] {
    return this._variants;
  }

  getVariantById(id): IVariant {
  // console.log("LanguagesService getVariantById()", id);
    let value: IVariant;
    for (let i = 0; i < this._variants.length; i++) {
      if (this._variants[i].id == id) {
        value = this._variants[i];
        break;
      }
    }
    return value;
  }

  getVariantsBySupplier(name): IVariant[] {
    let value: IVariant[];
    for (let i = 0; i < this._variants.length; i++) {
      if (this._variants[i].data.info.supplier == name) {
        value.push(this._variants[i]);
      }
    }
    return value;
  }

  getVariantsGroupedBySupplier(): IVariantGroupedBySupplier[] {
    let value: IVariantGroupedBySupplier[] = [];

    for (let i = 0; i < this._variants.length; i++) {
      // Check if Supplier already exists in value
      let supplierExists = value.findIndex((element) => {
        return element.name == this._variants[i].data.info.supplier
      })

      if (supplierExists == -1) {
        // Supplier not exists, add first variant entry
        let element: IVariantGroupedBySupplier = { name: this._variants[i].data.info.supplier, variants: [this._variants[i]] };
        value.push(element);
      } else {
        // Supplier exists, add variant entry
        value[supplierExists].variants.push(this._variants[i]);
      }
    }

    value.sort(this.sortSupplier);

    for (let i = 0; i < value.length; i++) {
      value[i].variants.sort(this.sortModelsBySupplier);
    }

  // console.log("VariantService getVariantsGroupedBySupplier()", value);
    return value;
  }

  // Alphabetical sort by supplier name
  private sortSupplier(a: IVariantGroupedBySupplier, b: IVariantGroupedBySupplier) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names are equal
    return 0;
  }

  // Alphabetical sort by model name per supplier
  private sortModelsBySupplier(a: IVariant, b: IVariant) {
    let nameA = a.data.info.model.toUpperCase(); // ignore upper and lowercase
    let nameB = b.data.info.model.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names are equal
    return 0;
  }
}

interface IVariantDataInfo {
  supplier: string;
  model: string;
}

interface IVariantDataFront {
  width: number;
  height: number;
}

interface IVariantDataDistance {
  x: number;
  y: number;
}

interface IVariantDataMinutes {
  placement: string;
  radius: number;
  distance: IVariantDataDistance;
}

interface IVariantDataAlarm {
  show: boolean;
  size: number;
  distance: IVariantDataDistance;
}

interface IVariantDataFont {
  size: number;
}

interface IVariantDataMatrix {
  columns: number;
  rows: number;
  distance: IVariantDataDistance;
  font: IVariantDataFont;
}

interface IVariantDataLogo {
  text: string;
  size: number;
  distance: IVariantDataDistance;
}

interface IVariantData {
  info: IVariantDataInfo;
  front: IVariantDataFront;
  minutes: IVariantDataMinutes;
  alarm: IVariantDataAlarm;
  matrix: IVariantDataMatrix;
  logo: IVariantDataLogo;
}

export interface IVariant {
  id: string;
  data: IVariantData;
}

export interface IVariantGroupedBySupplier {
  name: string;
  variants: IVariant[];
}


