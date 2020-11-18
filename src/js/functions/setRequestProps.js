// Personal hooks for setting request props

const useRequestProps = (from) => {
  let nextURL, answerState;

  if (from === "/hsok-admin/answered-requests") {
    answerState = "answered";
    nextURL = "/hsok-admin/answer-detail";
  } else {
    answerState = "new";
    nextURL = "/hsok-admin/request-detail";
  }

  return { answerState, nextURL };
};

export default useRequestProps;
