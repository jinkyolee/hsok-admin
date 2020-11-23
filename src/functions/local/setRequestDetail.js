const setRequestDetail = (details) => {
  let description,
    images = [];
  let cus_silk = 0,
    cus_poly = 0,
    rent_silk = 0,
    rent_poly = 0;

  for (let item of details) {
    images.push(item.detailImage);

    if (item.fabric === "실크") {
      if (item.making_type === "맞춤") {
        cus_silk += 1;
      } else {
        rent_silk += 1;
      }
    } else {
      if (item.making_type === "맞춤") {
        cus_poly += 1;
      } else {
        rent_poly += 1;
      }
    }
  }

  if (cus_silk !== 0 && cus_poly !== 0 && rent_silk !== 0 && rent_poly !== 0) {
    description = `실크 맞춤 ${cus_silk}벌, 대여 ${rent_silk}벌, 물실크 맞춤 ${cus_poly}벌, 대여 ${rent_poly}벌`;
  } else if (cus_poly === 0 && rent_poly === 0) {
    if (cus_silk === 0) {
      description = `실크 대여 ${rent_silk}벌`;
    } else if (rent_silk === 0) {
      description = `실크 맞춤 ${cus_silk}벌`;
    } else {
      description = `실크 맞춤 ${cus_silk}벌, 실크 대여 ${rent_silk}벌`;
    }
  } else if (rent_poly === 0) {
    if (cus_silk === 0 && rent_silk === 0) {
      description = `물실크 맞춤 ${cus_poly}벌`;
    } else if (rent_silk === 0) {
      description = `실크 맞춤 ${cus_silk}벌, 물실크 맞춤 ${cus_poly}벌`;
    } else if (cus_silk === 0) {
      description = `물실크 맞춤 ${cus_poly}벌, 실크 대여 ${rent_silk}벌`;
    } else {
      description = `실크 맞춤 ${cus_silk}벌, 물실크 맞춤 ${cus_poly}벌, 물실크 대여 ${rent_poly}`;
    }
  } else if (cus_silk === 0 && rent_silk === 0) {
    if (cus_poly === 0) {
      description = `물실크 맞춤 ${cus_poly}벌, 물실크 대여 ${rent_poly}벌`;
    } else {
      description = `물실크 대여 ${rent_poly}벌`;
    }
  } else if (cus_poly) {
    if (cus_silk) {
      description = `실크 대여 ${rent_silk}벌, 물실크 대여 ${rent_poly}벌`;
    } else if (rent_silk === 0) {
      description = `실크 맞춤 ${cus_silk}벌, 물실크 대여 ${rent_poly}벌`;
    } else {
      description = `실크 맞춤 ${cus_silk}벌, 실크 대여 ${rent_silk}벌, 물실크 대여 ${cus_poly}벌`;
    }
  } else if (cus_silk) {
    description = `물실크 맞춤 ${cus_poly}벌, 실크 대여 ${rent_silk}벌, 물실크 대여 ${rent_poly}벌`;
  }

  return { description, images };
};

export default setRequestDetail;
