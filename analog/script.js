const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');
function setdate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();

    const secondsdegree=(seconds/60)*360;
    const minutesdegree=(minutes/60)*360;
    const hoursdegree=(hours/12)*360;
    second.style.transform=`rotate(${secondsdegree}deg)`;
    minute.style.transform=`rotate(${minutesdegree}deg)`;
    hour.style.transform=`rotate(${hoursdegree}deg)`;
}
 setInterval(setdate,1000);