

// const validation={
//     data(){
//         return{
//         errors: [],
//       name: null,
//       email: null,
//       password: null
          
//         }
//     },
//     methods:{
//         valid: function (e) {
//         if (this.surname && this.dob && this.job && this.givenname && this.placeofreside && this.nationality) {
//             return true;

//            this.errors = [];
    
//           if (!this.surname) {
//             this.errors.push('Name required.');
//           }
//           if (!this.dob) {
//             this.errors.push('Email required.');
//           }
//           if (!this.givenname) {
//             this.errors.push('Password required.');
//           }
//           if (!this.placeofreside) {
//             this.error.push("Fill in the field");
//           }
//           if (!this.nationality) {
//             this.error.push("Fill in the field");
//           }
          
//           e.preventDefault();
//         }
//       }
// }

// Vue.createApp(validation).mount("#app");