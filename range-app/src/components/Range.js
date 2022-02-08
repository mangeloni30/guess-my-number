import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin: 30px;
	border: 1px solid red;
`;

const Wrapper2 = styled.div`
	div {
		background-color: blue;
		height: 10px;
		width: 10px;
	}
`;

function Range() {
	const [dragabble, setDragabble] = useState(false);
	const [positionX, setPositionX] = useState();
	const [newPositionX, setNewPositionX] = useState();
	console.log("newPositionX ", newPositionX)
  console.log("dragabble ==> ", dragabble)
  return (
    <div>
			<Wrapper>
				<div>
					<Wrapper2>
						{/* <div
							dragabble={dragabble}
							onMouseDown={(e) => {
								if (e.button !== 0) return
								console.log("e ==> ", e)
								setDragabble(true);
								setPositionX(e.pageX);
								console.log("ON MOUSE DOWN BUTTON pageX ", e.pageX)
							}}
							onMouseUp={(e) => {
                console.log("on MOUSE UP e.pageX ", e.pageX)
								setDragabble(false);
							}}
							onMouseMove={({ pageX }) => {
                console.log("onMouseMove")
								setNewPositionX(pageX - positionX);
							}}
						/> */}
					</Wrapper2>
					<p
            draggable
            onMouseDown={(e) => {
              if (e.button !== 0) return
              console.log("e ==> ", e)
              setDragabble(true);
              setPositionX(e.pageX);
              console.log("ON MOUSE DOWN BUTTON pageX ", e.pageX)
            }}
            onMouseUp={(e) => {
              console.log("on MOUSE UP e.pageX ", e.pageX)
              setDragabble(false);
            }}
            onMouseMove={({ pageX }) => {
              console.log("onMouseMove")
              setNewPositionX(pageX - positionX);
            }}
          >
						Bar
					</p>
				</div>
			</Wrapper>
    </div>
  );
}

export default Range;
