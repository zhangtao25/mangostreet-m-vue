function formatAreaData(areaData) {
  let area = {
    "name": "province",
    "label": "请选择",
    "options": []
  };
  areaData.forEach((item,index)=>{
    area['options'].push({
      "value": item.id,
      "label": item.name,
      "children": {
        label: "请选择",
        name: "city",
        "options": []
      }
    })
  });
  areaData.forEach((item1,index1)=>{
    areaData[index1]['children'].forEach((item,index)=>{
      area['options'][index1]['children']['options'].push({
        "value": item.id,
        "label": item.name,
        "children": {
          label: "请选择",
          name: "district",
          "options": []
        }
      })
    })
  });
  areaData.forEach((item11,index11)=>{
    areaData[index11]['children'].forEach((item1,index1)=>{
      if (areaData[index11]['children'][index1]['children']){
        areaData[index11]['children'][index1]['children'].forEach((item,index)=>{
          area['options'][index11]['children']['options'][index1]['children']['options'].push({
            "value": item.id,
            "label": item.name
          })
        })
      }
    })
  })

  return area
}


export default {
  formatAreaData
}
