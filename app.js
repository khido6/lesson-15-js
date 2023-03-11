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
    