const currentday = new Date(). getDay();
switch (currentday) {
    case 0:
        console.log('sunday');
        break;
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('Trusday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    default:
        console.log('sorry, we are out of ${expr}.');
}

for (let i = 0; i <= 150; i += 10); {
    console.log('i');
    
}

let a = 0;
while (a <= 100) {
    console.log('i');
    a += 2;
    break;
}

let i = 0;
do {
    i += 1;
    console.log('i');
    break;
}   while (i < 50)

const massive = [];
    for (let i = 0; i < 20; [i*i]); {
        massive.push('i');
    }


const currencies = [
    {
        code: "AED",
        quantity: 10,
        rateFormated: "7.1320",
        diffFormated: "0.0209",
        rate: 7.132,
        name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
        diff: -0.0209,
        date: "2023-02-28T17:45:12.156Z",
        validFromDate: "2023-03-01T00:00:00.000Z",
    },
    {
        code: "AMD",
        quantity: 1000,
        rateFormated: "6.7264",
        diffFormated: "0.0014",
        rate: 6.7264,
        name: "სომხური დრამი",
        diff: -0.0014,
        date: "2023-02-28T17:45:12.156Z",
        validFromDate: "2023-03-01T00:00:00.000Z",
    },
    {
        code: "AZN",
        quantity: 1,
        rateFormated: "1.5409",
        diffFormated: "0.0045",
        rate: 1.5409,
        name: "აზერბაიჯანული მანათი",
        diff: -0.0045,
        date: "2023-02-28T17:45:12.156Z",
        validFromDate: "2023-03-01T00:00:00.000Z",
    },
    {
        code: "CZK",
        quantity: 10,
        rateFormated: "1.1799",
        diffFormated: "0.0055",
        rate: 1.1799,
        name: "ჩეხური კრონა",
        diff: 0.0055,
        date: "2023-02-28T17:45:12.156Z",
        validFromDate: "2023-03-01T00:00:00.000Z",
    },
    {
        code: "EUR",
        quantity: 1,
        rateFormated: "2.7791",
        diffFormated: "0.0040",
        rate: 2.7791,
        name: "ევრო",
        diff: 0.004,
        date: "2023-02-28T17:45:12.156Z",
        validFromDate: "2023-03-01T00:00:00.000Z",
    },
    {
        code: "GBP",
        quantity: 1,
        rateFormated: "3.1674",
        diffFormated: "0.0203",
        rate: 3.1674,
        name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
        diff: 0.0203,
        date: "2023-02-28T17:45:12.156Z",
        validFromDate: "2023-03-01T00:00:00.000Z",
     },
];


for (let i = 0; i < currencies.length; i++) 

    currencies.diff = currencies[i].diff;
    if (currencies[i].diff < 0) {
      console.log(currencies[i].name, currencies[i].code);
    }




