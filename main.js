// 1.	צור כפתור שברגע שלוחצים עליו 
// משנה את הטקסט שלו ל- "לחצו עלי".
// const myBtn = document.getElementById("btn")
// myBtn.addEventListener("click", function(){
//     myBtn.innerText ="click on me";
// })

// // 2.	צור 4 כפתורים ברגע שלוחצים עליהם
// //  כל כפתור מקפיץ הודעה אחרת.
// const btn1=document.getElementById("btn1");
// const btn2=document.getElementById("btn2");
// const btn3=document.getElementById("btn3");
// const btn4=document.getElementById("btn4");

// btn1.addEventListener("click",function(){
//     alert("good")
// })

// btn2.addEventListener("click",function(){
//     alert("great")
// })

// btn2.addEventListener("click", function(){
//     alert("perfect")
// })

// btn4.addEventListener("click", function(){
//     alert("awesome")
// })

// 3.	צור אלמנט רשימה עם 5 אלמנטים 
// ברגע שלוחצים
//  על רשימה מודפס הטקסט שבה(class).

// const orderList = document.getElementById ("orderList");
// const List = document.getElementsByClassName("List")
//  for(let i=0;i<List.length;i++){
//      List[i].addEventListener("click", function(){
//         console.log(List[i]);
//     }
   
//      )}

     
    //  4.	צור דף html עם כפתור ואלמנט p, 
    //  הגדר משתנה בשם num ואתחל אותו לאפס, כל לחיצה על הכפתור
    //   מקדמת את המספר באחת ורושמת
    //   אותו בתוך אלמנט p. כך שבלחיצה הראשונה
    //    על הכפתור יופיע ב p הטקסט 1 בלחיצה שניה הטקסט 2 
    //    בלחיצה השלישית 3 וכך הלאה.
//     let num=0;
//     const p = document.getElementById("paragraph");
//     const Button = document.getElementById ("Button");
    

//     while(Button){
//     Button.addEventListener ("click", function(){
//         p.innerText = num++;  
//     });
    
//     break;
// }


// 5.	
// הוסף לתרגיל 4 
// כפתור שבלחיצה עליו מחסירה  מ num 
// ורושמת אותו לאותו אלמנט p.

//    צריך לפתוח את תשובה 4 ותשובה 5 יחד
//     (חלק מהדברים מוגדריםב4 לדוגמא השמה של NUM )
//    וגם את הקריאה של הP
//     -כי כבר קראתי לה בשאלה קודמת



//     const btnminus = document.getElementById ("btnminus");
    

//     while(btnminus){
//         btnminus.addEventListener ("click", function(){
//         p.innerText = num--;  
//     });
    
//     break;
// }


// 7.	צור מערך של מוצרים המכיל: שם, מחיר, תאור.
// a.	מצא את המוצר היקר ביותר
// b.	מצא את המוצר הזול ביותר
// c.	הורד 30% ממחיר כל המוצרים.

const Products=[
    {
    name:"mazda",
    price :"300",
    details:"blue",
    },
    {
    name:"iphone",
    price  :"30",
    details:"pink",
},
    {
    name:"pizza",
    price:"10",
    details:"hot",
},
    {
    name:"bread",
    price:"5",
    details:"vegan",
},
]


// a-  
for(let i=0; i<Products.length;i++){
    console.log(i);
    let expensive=mazdaPrice;
    if(mazdaPrice>){

    }
    
    return
}