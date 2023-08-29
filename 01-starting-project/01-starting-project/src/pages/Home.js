import {Link, useNavigate} from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();
    // const navigateHandler = () => {
    //     navigate('/Products');
    // }
    return (
        <>
        
    <h1>My Home Page</h1> 
    {/* //이런 코드의 문제점: 코드가 새로 서버를 요청해서 js를 받아옴
     그래서 받아오는 게 있음 전환해주는  컴포넌트를 사용
     그게 바로 이 링크임. 그럼 아까와는 다르게 서버로 리퀘스트 안해서
     새로고침 버튼이 깜박이지 않으며 속도도 빨라짐. */}
    <p>Go to <Link to ="/Products"> the list of Products</Link>
 </p>  
 {/* <p>
    <button onClick={navigateHandler}>Navigate</button>
 </p> */}
    </>
);
};

export default HomePage;