
let index=0;
let maxTodo;//최대 todolist 개수를 저장하고 불러올 때 사용하는 변수
//todo list를 삭제하는 함수
function removeTodo(index){
    document.querySelector(`#todo${index}`).remove();
    localStorage.removeItem(`${index}`,);
}


window.addEventListener('load',()=>{
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////새로고침 시 불러오기
    maxTodo=localStorage.getItem('maxTodo');//이전의 최댓값을 불러와서 maxtodo로 저장한다.
    let todoText;
    let newIndex=0;//중간 중간이 비어있는 todoid를 새로 부여해준다.
    for(let i=0;i<maxTodo;i++){
        todoText=localStorage.getItem(i);//max까지 값이 있는지 확인하기 위해 모두 불러온다.
        localStorage.removeItem(i);//불러온 값은 삭제해서 추후에 업데이트 된 값이 저장 될 수 있도록 한다.
        if(todoText==null){continue}//값이 없으면 건너뛰기
        document.querySelector('#todolist').innerHTML+=`<tr id='todo${newIndex}'><td>${todoText}</td><td><button onClick="removeTodo('${newIndex}')">완료</button></td></tr>`
        localStorage.setItem(`${newIndex}`,todoText);//id가 깔끔하게 정리된 list를 다시 저장한다.
        newIndex++//값이 들어갈 때마다 증가해서 새로운 id를 부여할 수 있도록 한다.
    }
    localStorage.setItem('maxTodo',newIndex);//newindex가 매번 값이 추가될 때마다 증가했으므로 현재 있는 todo의 개수와 같다. 
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    setInterval(()=>{
        let time=new Date();
        console.log(time);
        document.querySelector('#time').textContent=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
        

    },1000);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////버튼을 눌렀을 때.
    document.querySelector('#submitTodo').addEventListener('click',()=>{

        let text=document.querySelector('#todoText').value;
        console.log(text);
        localStorage.setItem(`${index}`,text);//값이 들어오면 우선 저장
        document.querySelector('#todolist').innerHTML+= `<tr id='todo${index}'><td>${text}</td><td><button onClick="removeTodo('${index}')">완료</button></td></tr>`
        document.querySelector('#todoText').value="";
        index++;//id할당에 쓰이는변수
        localStorage.setItem('maxTodo',++maxTodo); //max값을 추가해 불러올 때 이용
        
    
    });

   
    

});

