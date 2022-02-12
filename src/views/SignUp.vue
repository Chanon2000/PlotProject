<template>
    <div>
        <h1 class="header">ลงทะเบียน</h1>
              <v-row>
        <v-col cols="12" class="pb-0 mb-5">
          <div class="text-center">
            <v-avatar size="155">
              <img :src="getPhoto()" alt="alt" />
            </v-avatar>
            <!-- <div class="text-center">
              อีเมลจาก line คือ: {{ getEmail() }}
            </div> -->
          </div>
          
        </v-col>
              </v-row>
        <form @submit.prevent="handleSubmit">
          <div class="form-pad">
          
        <!-- FirstName -->
            <v-text-field
            filled
            v-model="RegisterForm.FirstName"
            :error-messages="firstnameErrors"
            :counter="20"
            label="ชื่อ"
            required
            @input="$v.RegisterForm.FirstName.$touch()"
            @blur="$v.RegisterForm.FirstName.$touch()"
          ></v-text-field>

        <!-- LastName -->
            <v-text-field
            filled
            v-model="RegisterForm.LastName"
            :error-messages="lastnameErrors"
            :counter="20"
            label="นามสกุล"
            required
            @input="$v.RegisterForm.LastName.$touch()"
            @blur="$v.RegisterForm.LastName.$touch()"
          ></v-text-field>

        <!-- Email -->
            <v-text-field
              filled
              
              :value="getEmail()"
              :error-messages="emailErrors"
              label="อีเมล"
              required
              @input="setEmail($event)"
              @blur="setEmail($event.target.value)"
            >
            </v-text-field>
            <!-- :value="getEmail()" -->
            <!-- v-model="RegisterForm.Email" -->
            

        <!-- tel -->
            <v-text-field
            filled
            v-model="RegisterForm.Tel"
            :error-messages="phoneErrors"
            label="เบอร์โทรศัพท์"
            required
            @input="$v.RegisterForm.Tel.$touch()"
            @blur="$v.RegisterForm.Tel.$touch()"
            ></v-text-field>

        <!-- Address -->
            <v-textarea
            filled
            v-model="RegisterForm.Address"
            :error-messages="addressErrors"
            label="ที่อยู่"
            required
            @input="$v.RegisterForm.Address.$touch()"
            @blur="$v.RegisterForm.Address.$touch()"
            ></v-textarea>

            <v-hover v-slot="{ hover }">
              <v-btn block color="success" @click="handleSubmit" rounded large :class="{'on-hover':hover}">
                ลงทะเบียน
              </v-btn>
            </v-hover>
            <v-hover>
              <div class="clear">
                <v-btn @click="clear" block rounded large>
                  แก้ไข
                </v-btn>
              </div>
            </v-hover>
          </div>
        </form>
        

    </div>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    validations: {
      RegisterForm: {
        FirstName: { required, maxLength: maxLength(20) },
        LastName: { required, maxLength: maxLength(20) },
        Email: { required, email },
        Tel: { required, maxLength: maxLength(10) },
        Address: { required, maxLength: maxLength(50) }
      }
    },
    data: () => ({
      wrapper: true,
      RegisterForm: {
        FirstName: '',
        LastName: '',
        Email: '',
        Tel: '',
        Address: ''
      },
      submitted: true,
      
    }),
    computed: {
      registerForm() {
        return {
          Email: this.RegisterForm.Email,
          FirstName: this.RegisterForm.FirstName,
          LastName: this.RegisterForm.LastName,
          Tel: this.RegisterForm.Tel,
          Address: this.RegisterForm.Address,

          lineId: this.getLineprofile.userId,
          displayName: this.getLineprofile.displayName,
          pictureUrl: this.getLineprofile.pictureUrl,
          statusMessage: this.getLineprofile.statusMessage,
          
        }
      },
      firstnameErrors () {
        const errors = []
        if (!this.$v.RegisterForm.FirstName.$dirty) return errors
        !this.$v.RegisterForm.FirstName.maxLength && errors.push('"ชื่อ" ต้องมีไม่เกิน 20 ตัวอักษร') // "ชื่อ" ต้องไม่มากกว่า 20 ตัวอักษร
        !this.$v.RegisterForm.FirstName.required && errors.push('จำเป็นต้องใส่ "ชื่อ" ด้วย') // จำเป็นต้องใส่ "ชื่อ" ด้วย
        return errors
      },
      lastnameErrors () {
        const errors = []
        if (!this.$v.RegisterForm.LastName.$dirty) return errors
        !this.$v.RegisterForm.LastName.maxLength && errors.push('"นามสกุล" ต้องมีไม่เกิน 20 ตัวอักษร') // "นามสกุล" ต้องไม่มากกว่า 20 ตัวอักษร
        !this.$v.RegisterForm.LastName.required && errors.push('จำเป็นต้องใส่ "นามสกุล" ด้วย') // จำเป็นต้องใส่ "นามสกุล" ด้วย
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.RegisterForm.Email.$dirty) return errors
        !this.$v.RegisterForm.Email.email && errors.push('ไม่ใช่ อีเมล')  // ไม่ใช่ อีเมล
        !this.$v.RegisterForm.Email.required && errors.push('จำเป็นต้องใส่ "อีเมล" ด้วย') // จำเป็นต้องใส่ "อีเมล" ด้วย
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.RegisterForm.Tel.$dirty) return errors
        !this.$v.RegisterForm.Tel.maxLength && errors.push('"เบอร์โทรศัพท์" ต้องมีไม่เกิน 10 ตัวอักษร') // "เบอร์โทรศัพท์" ต้องมีไม่เกิน 10 ตัวอักษร
        !this.$v.RegisterForm.Tel.required && errors.push('จำเป็นต้องใส่ "เบอร์โทรศัพท์" ด้วย') // จำเป็นต้องใส่ "เบอร์โทรศัพท์" ด้วย
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.RegisterForm.Address.$dirty) return errors
        !this.$v.RegisterForm.Address.maxLength && errors.push('"ที่อยู่" ต้องมีไม่เกิน 50 ตัวอักษร') // "ที่อยู่" ต้องมีไม่เกิน 50 ตัวอักษร
        !this.$v.RegisterForm.Address.required && errors.push('จำเป็นต้องใส่ "ที่อยู่" ด้วย')
        return errors
      },
      //getter from store
      ...mapGetters([
        "getLineprofile",
      ])
    },
    // # มีแค่ 2 ฟังก์ชันคือ submit กับ clear
    methods: {

      setEmail(event) {
        console.log(event)
        this.RegisterForm.Email = event
        this.$v.RegisterForm.Email.$touch()
        // console.log(this.$v.Email)
      },
      ...mapActions(["setRegister"]),
      handleSubmit () {
        this.$v.$touch()
        console.log(this.$v.RegisterForm.Email.$error)
        if(this.$v.RegisterForm.$error) return


        this.Email = this.getEmail()
        console.log(this.registerForm)
        this.$v.$touch()
        this.setRegister(this.registerForm) // assign to vuex
        this.$router.push("/usermenu");
      },
      clear () {
        this.$v.$reset()
        // this.name = ''
        // this.email = ''
        
        // this.phone = ''
        // this.address = ''
      },
      getPhoto() {
        return this.getLineprofile.pictureUrl;
      },
      getEmail(){
        return this.getLineprofile.email
      },
    },

}
</script>

<style  scoped>
    div {
        margin: 2px
    }
    h1 {
      text-align: center;
    }
    .clear {
      padding-top: 10px;
    }
    .header {
      padding-top: 20px;
    }
    v-btn {
      size: 10px
    }
    .form-pad {
      margin: 5px
    }

    .on-hover{
      background-color: rgba(rgb(7, 4, 4), 0.8)
    }

</style>