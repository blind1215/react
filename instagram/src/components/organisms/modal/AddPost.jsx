import React, { useState } from "react";
import styled from "styled-components";
import { BasicModal, Backdrop } from "../../atoms";
import { uploadImage } from "../../../apis/upload";
import { addPost } from "../../../apis/post";

const ModalAddPost = ({ onClose }) => {
  const [imageList, setImageList] = useState([]);
  const [content, setContent] = useState("");

  const fileChange = (e) => {
    //첫번째 요소 들어옴 선택한
    const file = e.target.files[0];

    const reader = new FileReader();
    //리더가 로드가 끝나면 작업할것들
    reader.onloadend = () => {
      const newImage = {
        file: file,
        preview: reader.result,
      };
      //배열유지하면서 뒤에 추가하기
      setImageList((prev) => [...prev, newImage]);
    };
    //읽어오기 파일을
    reader.readAsDataURL(file);
  };

  const submitH = async () => {
    //1. 이미지들을 업로드해서 s3주소를 받아온다
    //2. textarea글과 이미지주소를 서버에 보내서 post를 생성한다.

    //병렬 정렬
    const promiseList = imageList.map((img) => uploadImage(img.file));
    const urlList = await Promise.all(promiseList);
    const result = await addPost({ content, imageList: urlList });
    console.log(result);
    //닫는함수씀 나혼자 추가
    onClose();
    //다시 메인페이지 리로드
  };
  return (
    <>
      <Modal>
        <Header>
          <h2>새 게시물 만들기</h2>
          <BtnSubmit onClick={submitH}>공유하기</BtnSubmit>
        </Header>
        <Textarea rows="6" onChange={(e) => setContent(e.target.value)} />
        <Label htmlFor="file">컴퓨터에서 선택</Label>
        <ImageList>
          {imageList.map((img) => (
            <ImageItem key={img.preview}>
              <Image src={img.preview} />
            </ImageItem>
          ))}
        </ImageList>
        <InputFile
          id="file"
          type="file"
          accept="image/*"
          onChange={fileChange}
        />
      </Modal>
      <Backdrop onClick={onClose} />
    </>
  );
};

const Modal = styled(BasicModal)``;
const Header = styled.header`
  position: relative;
`;
const BtnSubmit = styled.span`
  color: #0095f6;
  position: absolute;
  right: 0;
  top: 5px;
  cursor: pointer;
`;

const ImageList = styled.ul``;
const ImageItem = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const Label = styled.label`
  display: inline-block;
  background-color: #0095f6;
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin-top: 10px;
`;
export default ModalAddPost;
