// Personal Hooks for setting tab elements
import { useState, useEffect } from "react";

const useNavTabs = (url) => {
  const [link, setLink] = useState(""),
    [title, setTitle] = useState(""),
    [classTag, setClassTag] = useState(""),
    [status, setStatus] = useState("");

  useEffect(() => {
    if (url === "/new-requests") {
      setLink("/");
      setTitle("새 요청");
      setClassTag("column");
    } else if (url === "/request-detail") {
      setLink("/new-requests");
      setTitle("세부 사항");
      setClassTag("column");
    } else if (url === "/answer-request") {
      setLink("/request-detail");
      setTitle("견적 답변하기");
      setClassTag("column--large");
    } else if (url === "/answered-requests") {
      setLink("/");
      setTitle("답변한 요청");
      setClassTag("column");
    } else if (url === "/answer-detail") {
      setLink("/answered-requests");
      setTitle("답변보기");
      setClassTag("column");
    } else if (url === "/login") {
      setLink("");
      setTitle("로그인");
      setClassTag("column");
    } else if (url === "/signup") {
      setLink("/login");
      setTitle("회원가입");
      setClassTag("column");
    } else if (url === "/account-recover") {
      setLink("/login");
      setTitle("비밀번호 찾기");
      setClassTag("column");
    }

    if (
      url === "/new-requests" ||
      url === "/request-detail" ||
      url === "/answer-request" ||
      url === "/login"
    ) {
      setStatus("");
    } else if (url === "/answered-requests" || url === "/answer-detail") {
      setStatus("--answered");
    }
  }, [url]);

  return { link, title, classTag, status };
};

export default useNavTabs;