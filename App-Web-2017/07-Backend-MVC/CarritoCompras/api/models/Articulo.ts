/**
 * Created by CEDIA on 24/07/2017.
 */
declare var module:any;

module.exports = {
  attributes:{
    title:{
      type:"string"
    },
    country:{
      type:"string"
    },
    number:{
      type:"string"
    },
    volume:{
      type:"string"
    },
    year:{
      type:"string"
    },
    abstract:{
      type:"string"
    },
    link: [
      {
        url: "string"

      }
      ],
    author: [
      {
        name: "string"
      }
    ],

  }

};
