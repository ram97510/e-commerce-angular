import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mobiles = [
    {
      id: 1,
      pic: "https://opsg-img-cdn-gl.heytapimg.com/epb/202206/09/3RrpF0ooTE9UMBDy.png?x-amz-process=image/format,webp/quality,Q_80",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "OPPO A12",
      color: "(Blue,32 GB)",
      price: "9,990",
      rating: 3,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 2,
      pic: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662423574/Croma%20Assets/Communication/Mobiles/Images/223218_yorklq.png/mxw_640,f_auto",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "Vivo Y11",
      color: "(Green,32 GB)",
      price: "9,990",
      rating: 5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 3,
      pic: "https://welectronics.com/images/stories/virtuemart/product/Samsung%20A5193.png",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "Galaxy A 51",
      color: "(Black,64 GB)",

      price: "10,999",
      rating: 4,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 4,
      pic: "https://m.media-amazon.com/images/I/61GPDkfDBGL._SL1500_.jpg",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "POCO X2",
      color: "(Matrix Purple,64 GB)",
      price: "9990",
      rating: 3,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 5,
      pic: "https://gsmorigin.com/wp-content/uploads/2019/09/Realme-5.jpg",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "Realme 5s",
      color: "(Crystal Blue,128 GB)",
      price: "11,999",
      rating: 4,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 6,
      pic: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/6/164340_2020.jpg",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "Honor 10 Lite",
      color: "(Midnight Black,32 GB)",
      price: "13,990",
      rating: 4,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 7,
      pic: "https://opsg-img-cdn-gl.heytapimg.com/epb/202206/09/3RrpF0ooTE9UMBDy.png?x-amz-process=image/format,webp/quality,Q_80",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "OPPO A12",
      color: "(Blue,32 GB)",
      price: "9,990",
      rating: 3,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 8,
      pic: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662423574/Croma%20Assets/Communication/Mobiles/Images/223218_yorklq.png/mxw_640,f_auto",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "Vivo Y11",
      color: "(Green,32 GB)",
      price: "9,990",
      rating: 4,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 9,
      pic: "https://welectronics.com/images/stories/virtuemart/product/Samsung%20A5193.png",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "Samsung A 51",
      color: "(Black,64 GB)",

      price: "10,999",
      rating: 5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    },
    {
      id: 10,
      pic: "https://m.media-amazon.com/images/I/61GPDkfDBGL._SL1500_.jpg",
      pic1: "https://rukminim1.flixcart.com/image/416/416/l15bxjk0/mobile/l/q/k/-original-imagcs2aaj2r3apf.jpeg?q=70",
      name: "POCO X2",
      color: "(Matrix Purple,64 GB)",
      price: "9990",
      rating: 4,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    }
  ];

//-----------------------------------------------

  mobileAccs = [
    {
      id: 1,
      pic: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWVU2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1590688532000",
      name: "Mobile Case",
      color: "Black,flexible",
      price: "239"
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/416/416/jtrjngw0/battery-charger/b/9/9/delmohut-original-wall-chargers-original-imaffyzpfnsm3hha.jpeg?q=70",
      name: "Mobile charger",
      color: "White",
      price: "449"
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/612/612/jv9udu80/data-cable/micro-usb-cable/3/e/c/portronics-por-654-konnect-core-1m-original-imafg6n2zs2cqtzd.jpeg?q=70",
      name: "Mobile Cables",
      color: "black",
      price: "199"
    },
    {
      id: 4,
      pic: "https://m.media-amazon.com/images/I/71hl2TlDgfL._SL1500_.jpg",
      name: "Mobile Holder",
      color: "black",
      price: "189"
    },
    {
      id:5,
      pic:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600435576.89141134.png?thumb=1&w=720&h=720&width=720&height=720",
      name:"Mi PowerBank",
      color:"blue",
      price:"999"
    },
    {
      id:6,
      pic:"https://images.dailyobjects.com/marche/product-images/1803/tempered-glass-screen-protector-for-vivo-v9-images/Vivo-For-Tempered-Glass-Screen-Protector-1.png?tr=cm-pad_resize,w-412,h-490,dpr-2",
      name:"Vivo V9 Tempered",
      color:"",
      price:"199"
    }
  ];

  //----------------------------------------------------

  speakers = [
    {
      id: 1,
      pic: "https://rukminim1.flixcart.com/image/612/612/jl6wjgw0/speaker-refurbished/w/f/3/u-a110-f-d-original-imaf8dugbygcue2v.jpeg?q=70",
      name: "Home Audio Speaker",
      color: "Black,2.1 channel",
      price: "1,599",
      rating: 3,
    },
    {
      id: 2,
      pic: "https://rukminim1.flixcart.com/image/612/612/k3ncakw0/speaker/home-theatre/y/g/q/zebronics-feel-original-imaff6r6kcr5nmrk.jpeg?q=70",
      name: "Home Theatre",
      color: "Black,4.1 channel",
      price: "2,199",
      rating: 4,
    },
    {
      id: 3,
      pic: "https://rukminim1.flixcart.com/image/416/416/k4x2du80/speaker/mobile-tablet-speaker/c/z/f/jbl-flip-essential-original-imafnpuhahqwvwhw.jpeg?q=70",
      name: "Bluetooth Speaker",
      color: "Grey,Stereo channel",
      price: "9,990",
      rating: 5,
    },
    {
      id: 4,
      pic: "https://rukminim1.flixcart.com/image/416/416/kmz7qfk0/speaker/soundbar/n/z/r/zeb-juke-bar-9400-pro-dolby-5-1-zeb-juke-bar-9400-pro-dolby-original-imagfrd3gwavhvpn.jpeg?q=70",
      name: "Bluetooth Soundbar",
      color: "Black",
      price: "10,999",
      rating: 4,
    },
    {
      id: 5,
      pic: "https://www.mivi.in/assets/play-speaker-feature-images/pink.png",
      name: "Mivi Speaker",
      color: "Pink",
      price: "699",
      rating: 5
    }
  ];

  //-----------------------------------------------------------

  television = [
    {
      id: 1,
      pic: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Mi_TV_4A_Horizon_Edition.png",
      name: "Mi X Series",
      detail:"138.8 cm (55 inch) Ultra HD (4K)",
      color: "Black",
      price: "34,999"
    },
    {
      id: 2,
      pic: "https://5.imimg.com/data5/SELLER/Default/2021/8/AD/YE/EI/10077095/91rfzivkmwl-ac-sl1500--500x500.jpg",
      name: "SONY Bravia  ",
      detail:"108 cm (43 inch) Ultra HD (4K)",
      color: "Black",
      price: "45,999"
    },
    {
      id: 3,
      pic: "https://www.pngall.com/wp-content/uploads/5/Samsung-TV-PNG-Pic.png",
      name: "SAMSUNG ",
      details:"108 cm (43 inch) Ultra HD (4K)",
      color: "Black",
      price: "30,990"
    },
    {
      id: 4,
      pic: "https://hshoppe.in/upload_image/gallery/thumb/Realme-32-inch-Smart-TV-4812217-1.jpg",
      name: "Realme TV ",
      details:"130 cm (55 inch) Ultra HD (4K)",
      color: "Black",
      price: "40,990"
    },
    {
      id: 5,
      pic: "https://img.global.news.samsung.com/in/wp-content/uploads/2019/06/Samsung-QLED-8K-2.png",
      name: "SAMSUNG Crystal ",
      details:"108 cm (43 inch) Ultra HD (4K)",
      color: "Black",
      price: "28,990"
    }
  ];
}
