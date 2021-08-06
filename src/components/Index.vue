<template>
  <div>
    <div class="viruscontainer">
      <img src="../assets/images/byr.png" alt="" class="resize" />

      <form class="testingform" id="testingform" @submit.prevent="onSubmit">
        <h1>Virus-Test Registration Form</h1>
        <div class="test1">
          <div class="form-field">
            <label for="surname" class="vtestname" >Surname</label>
            <input type="text" name="surname" id="surname" class="registrationform" v-model.trim="surname" />
              <small
                class="error"
                v-for="(error, index) of v$.surname.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
          </div>
          <div class="form-field">
            <label for="Date" class="vtestname" id="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" class="registrationform" v-model.trim="dob" />
              <small
                  class="error"
                  v-for="(error, index) of v$.dob.$errors"
                  :key="index"
                >
                  {{ error.$property }} {{ error.$message }}
                </small>
          </div>  

          <label for="" class="vtestname">Occupation</label>
           <div class="form-field">
              <input type="text" name="occupation" id="occupation" class="registrationform" v-model.trim="occupation" />
              <small
                class="error"
                v-for="(error, index) of v$.occupation.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
           </div>
           

        </div>

        <div class="test2">
          <div class="form-field">
            <label for="surname" class="vtestname">Given name</label>
            <input type="names" name="givenname" class="registrationform" id="givenname" v-model.trim="givenname" />
            <small
                class="error"
                v-for="(error, index) of v$.givenname.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
          </div>
          <div class="form-field">
            <label for="place" class="vtestname">Place of residence</label>
            <input type="text" name="placeofreside" class="registrationform" id="placeofreside" v-model.trim="placeofreside" />
             <small
                class="error"
                v-for="(error, index) of v$.placeofreside.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
          </div>
           <div class="form-field">
            <label for="">Nationality</label>
            <input type="text" name="nationality" class="registrationform" v-model.trim="nationality" />
            <small
                class="error"
                v-for="(error, index) of v$.nationality.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            <br />

           </div>
          
        </div>

        <div class="test3">
          <label class="testgender">Gender</label> <br />
          <hr />
          <input class="" type="radio" value="Male" checked/>
          <label for="huey">Male</label>
          <input class="testfemale" type="radio" value="Female" />
          <label for="huey">Female</label>
          <br />

          <label for="">Category Field</label>
          <br />
          <select>
            <option  value="none" selected disabled hidden>--Select Category--</option>
            <option>Returnee</option>
            <option>Contact</option>
            <option>Alert</option>
            <option>Volunteer</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength } from "@vuelidate/validators";

export default {
  name: 'Index',
   props: {
    msg: String,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      surname: '',
      dob: '',
      occupation: '',
      givenname: '',
      placeofreside: '',
      nationality: ''
    };
  },
  validations() {
    return {
       surname: { required, minLength: minLength(4)},
       dob: { required },
       occupation: { required},
       givenname: { required},
       placeofreside: {required},
       nationality: {required}
    }
  },
  methods: {
    onSubmit: function() {
      this.v$.$touch();
      if (this.v$.$error) return;
      alert("Form is valid");
    },
  },
};
</script>

<style>
small {
  color: red;
}

h1 {
  text-align: center;
  font-size: 30px;
  margin-top: 5px;
}
.viruscontainer {
  background-image: url(../assets/images/colors.png);
  background-size: 50px 50px;
  background-color: aliceblue;
  margin-left: 300px;
  margin: auto;
  margin-top: 20px;
  width: 600px;
  border: 1px solid rgb(163, 163, 163);
}
.resize {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50px;
  height: 50px;
}

.testingform {
  background-color: white;
  width: 600px;
  /* height: 400px; */
  padding: 20px;
  text-align: left;
}
.test1 {
  float: left;
  width: 50%;
}
.test2 {
  float: right;
  width: 50%;
}
.test3 {
  margin-top: 200px;
}

hr {
  margin-bottom: 0px;
  margin-top: 0px;
}
.testfemale {
  margin-left: 250px;
}
.registrationform {
  margin-top: 0px;
  width: 90%;
  border: 1px solid rgb(163, 163, 163);
  padding: 8px;
}
select {
  width: 90%;
  border: 1px solid rgb(163, 163, 163);
  padding: 9.5px;
  color: grey;
}
.btn {
  border: none;
  width: 400px;
  margin-left: 100px;
  margin-top: 20px;
}
</style>
