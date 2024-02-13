const quiz = [
  {
    id: 1,
    question: "สัตว์ประจำชาติไทยคืออะไร?",
    choices: [
      {
        choice: "ช้าง",
        isCorrect: true,
      },
      {
        choice: "เสือ",
        isCorrect: false,
      },
      {
        choice: "นก",
        isCorrect: false,
      },
      {
        choice: "ม้า",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "อาหารไทยที่ได้ชื่อว่าเผ็ดที่สุดคือ?",
    choices: [
      {
        choice: "ต้มยำกุ้ง",
        isCorrect: false,
      },
      {
        choice: "แกงเขียวหวาน",
        isCorrect: false,
      },
      {
        choice: "แกงส้ม",
        isCorrect: false,
      },
      {
        choice: "ส้มตำ",
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: "หนังสือที่ขายดีที่สุดในโลกคือ?",
    choices: [
      {
        choice: "พจนานุกรม",
        isCorrect: false,
      },
      {
        choice: "คัมภีร์ไบเบิ้ล",
        isCorrect: true,
      },
      {
        choice: "ฮาร์รี่ พอตเตอร์",
        isCorrect: false,
      },
      {
        choice: "ดา วินชี โค้ด",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: "ดาวเคราะห์ใดที่ใกล้กับดวงอาทิตย์ที่สุด?",
    choices: [
      {
        choice: "ดาวศุกร์",
        isCorrect: false,
      },
      {
        choice: "ดาวอังคาร",
        isCorrect: false,
      },
      {
        choice: "ดาวเนปจูน",
        isCorrect: false,
      },
      {
        choice: "ดาวพุธ",
        isCorrect: true,
      },
    ],
  },
  {
    id: 5,
    question: "พีระมิดที่ใหญ่ที่สุดในอียิปต์คือ?",
    choices: [
      {
        choice: "พีระมิดของขุนพลคูฟู",
        isCorrect: true,
      },
      {
        choice: "พีระมิดของขุนพลคาเฟร",
        isCorrect: false,
      },
      {
        choice: "พีระมิดของขุนพลเมนคอร์",
        isCorrect: false,
      },
      {
        choice: "พีระมิดแดง",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    question: "ประเทศไหนที่มีพื้นที่ใหญ่ที่สุดในโลก?",
    choices: [
      {
        choice: "สหรัฐอเมริกา",
        isCorrect: false,
      },
      {
        choice: "จีน",
        isCorrect: false,
      },
      {
        choice: "รัสเซีย",
        isCorrect: true,
      },
      {
        choice: "แคนาดา",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question: "สัตว์ใดที่มีชีวิตอยู่ในน้ำและบนบก?",
    choices: [
      {
        choice: "ปลา",
        isCorrect: false,
      },
      {
        choice: "กบ",
        isCorrect: true,
      },
      {
        choice: "นก",
        isCorrect: false,
      },
      {
        choice: "แมว",
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question: "ภาษาที่พูดกันมากที่สุดในโลกคือ?",
    choices: [
      {
        choice: "ภาษาอังกฤษ",
        isCorrect: false,
      },
      {
        choice: "ภาษาจีนมานดาริน",
        isCorrect: true,
      },
      {
        choice: "ภาษาสเปน",
        isCorrect: false,
      },
      {
        choice: "ภาษาฮินดี",
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    question: "องค์กรสหประชาชาติ (UN) ก่อตั้งขึ้นในปีใด?",
    choices: [
      {
        choice: "1945",
        isCorrect: true,
      },
      {
        choice: "1950",
        isCorrect: false,
      },
      {
        choice: "1960",
        isCorrect: false,
      },
      {
        choice: "1975",
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    question: "ประเทศใดที่ไม่มีกองทัพ?",
    choices: [
      {
        choice: "ไอซ์แลนด์",
        isCorrect: true,
      },
      {
        choice: "สวิตเซอร์แลนด์",
        isCorrect: false,
      },
      {
        choice: "ญี่ปุ่น",
        isCorrect: false,
      },
      {
        choice: "อิตาลี",
        isCorrect: false,
      },
    ],
  },
  {
    id: 11,
    question: "เมืองหลวงของออสเตรเลียคือ?",
    choices: [
      {
        choice: "ซิดนีย์",
        isCorrect: false,
      },
      {
        choice: "เมลเบิร์น",
        isCorrect: false,
      },
      {
        choice: "แคนเบอร์รา",
        isCorrect: true,
      },
      {
        choice: "บริสเบน",
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    question: "พืชใดที่สามารถอยู่ได้โดยไม่ต้องการน้ำเป็นเวลานาน?",
    choices: [
      {
        choice: "กุหลาบ",
        isCorrect: false,
      },
      {
        choice: "ต้นไม้คริสต์มาส",
        isCorrect: false,
      },
      {
        choice: "แคคตัส",
        isCorrect: true,
      },
      {
        choice: "ทานตะวัน",
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    question: "ใครเป็นผู้คิดค้นหลอดไฟฟ้า?",
    choices: [
      {
        choice: "โทมัส เอดิสัน",
        isCorrect: true,
      },
      {
        choice: "อัลเบิร์ต ไอน์สไตน์",
        isCorrect: false,
      },
      {
        choice: "นิโคลา เทสลา",
        isCorrect: false,
      },
      {
        choice: "อเล็กซานเดอร์ เบลล์",
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    question: "กรีกโบราณเชื่อว่าใครเป็นเทพเจ้าแห่งการแพทย์?",
    choices: [
      {
        choice: "ซุส",
        isCorrect: false,
      },
      {
        choice: "อพอลโล",
        isCorrect: false,
      },
      {
        choice: "อาสคลีเปียส",
        isCorrect: true,
      },
      {
        choice: "ฮาเดส",
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    question: "หอไอเฟลตั้งอยู่ที่ไหน?",
    choices: [
      {
        choice: "ลอนดอน",
        isCorrect: false,
      },
      {
        choice: "ปารีส",
        isCorrect: true,
      },
      {
        choice: "นิวยอร์ค",
        isCorrect: false,
      },
      {
        choice: "โรม",
        isCorrect: false,
      },
    ],
  },
  {
    id: 16,
    question: "ใครเป็นผู้ก่อตั้งบริษัทแอปเปิ้ล?",
    choices: [
      {
        choice: "บิล เกตส์",
        isCorrect: false,
      },
      {
        choice: "สตีฟ จ็อบส์",
        isCorrect: true,
      },
      {
        choice: "เอลอน มัสก์",
        isCorrect: false,
      },
      {
        choice: "มาร์ค ซักเคอร์เบิร์ก",
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    question: "ภาพยนตร์ที่ได้รับรางวัลออสการ์มากที่สุดคือ?",
    choices: [
      {
        choice: "ไททานิค",
        isCorrect: false,
      },
      {
        choice: "เดอะ ลอร์ด ออฟ เดอะ ริงส์: การกลับมาของราชา",
        isCorrect: true,
      },
      {
        choice: "ลา ลา แลนด์",
        isCorrect: false,
      },
      {
        choice: "อวตาร",
        isCorrect: false,
      },
    ],
  },
  {
    id: 18,
    question: 'ใครเป็นนักเขียนของเรื่อง "โรมิโอและจูเลียต"?',
    choices: [
      {
        choice: "วิลเลียม เชคสเปียร์",
        isCorrect: true,
      },
      {
        choice: "เจน ออสติน",
        isCorrect: false,
      },
      {
        choice: "เลโอ โตลสตอย",
        isCorrect: false,
      },
      {
        choice: "มาร์ค ทเวน",
        isCorrect: false,
      },
    ],
  },
  {
    id: 19,
    question: "ภาษาอะไรเป็นภาษาราชการของบราซิล?",
    choices: [
      {
        choice: "สเปน",
        isCorrect: false,
      },
      {
        choice: "โปรตุเกส",
        isCorrect: true,
      },
      {
        choice: "อังกฤษ",
        isCorrect: false,
      },
      {
        choice: "ฝรั่งเศส",
        isCorrect: false,
      },
    ],
  },
  {
    id: 20,
    question: "วันเด็กแห่งชาติในไทยตรงกับวันที่เท่าไหร่?",
    choices: [
      {
        choice: "1 มกราคม",
        isCorrect: false,
      },
      {
        choice: "12 สิงหาคม",
        isCorrect: false,
      },
      {
        choice: "5 ธันวาคม",
        isCorrect: false,
      },
      {
        choice: "วันเสาร์ที่สองของเดือนมกราคม",
        isCorrect: true,
      },
    ],
  },
];

export default quiz;
