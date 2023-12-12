import styled from "styled-components";

export const IndexContainer = styled.div`
    width:100%;
    height:100vh;
    /*background: linear-gradient(-45deg, #ee7752, #333, #23a6d5, #ff0000)*/
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`