import {db} from '../../firestore/firebase'
import { collection,doc, query, where, onSnapshot } from "firebase/firestore";
const calculateTotalData = (user,category,setValue) => {
  console.log(user)
  var totalEmmitted = 0;
     onSnapshot(doc(db,user,category), (querySnapshot) => {
      const data = querySnapshot.data();
      console.log(data)
      if(data == undefined) return 0;
      Object.keys(data).map((key,index) => {
        if(data[key] == null || data[key] == undefined) return 0
        Object.keys(data[key]).map((key1,index) => {
          console.log(totalEmmitted)
          totalEmmitted += data[key][key1];
        })
        setValue(totalEmmitted)
      })
    });
    console.log(totalEmmitted)
    
    }
    export default calculateTotalData;