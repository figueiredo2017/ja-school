<template>

<div class="container">
    <form name="subscription" id="subscription" method="post" data-netlify="true">
    <input type="hidden" name="type" value="student" />
    <form-wizard @on-complete="onComplete" 
                    title="Join Now"
                    subtitle="Sub-title line"
                    shape="square"
                    color="#3498db">
        <tab-content title="Basic Data"
                        icon="ti-user"
                        :before-change="validateFirstTab">

            <vue-form-generator :model="model"
                    :schema="firstTabSchema"
                    :options="formOptions"
                    ref="firstTabForm">
            </vue-form-generator>
        </tab-content>
        <tab-content title="Select your Plan"
                        icon="ti-settings">
            My second tab content
        </tab-content>
        <tab-content title="BOOK FIRST LESSON"
                        icon="ti-check">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
    </form-wizard>

    </form>
 </div>


</template>
<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import VueFormGenerator from "vue-form-generator"
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import axios from 'axios'

export default {
    components: {
        "vue-form-generator": VueFormGenerator.component,
        FormWizard,
        TabContent
    },
    data() {
        return {
            model: {
                name: "",
                email: "",
                password: "",
            },
            formOptions: {
                validationErrorClass: "has-error"
            },
            firstTabSchema: {
                fields: [
                    {
                        type: "input",
                        inputType: "text",
                        label: "Name",
                        model: "name",
                        required: true,
                        validator: VueFormGenerator.validators.string,
                        styleClasses: "",
                    },
                    {
                        type: "input",
                        inputType: "text",
                        label: "Email",
                        model: "email",
                        required: true,
                        validator: VueFormGenerator.validators.email,
                        styleClasses: "",
                    },
                    {
                        type: "input",
                        inputType: "password",
                        label: "Password",
                        model: "password",
                        required: true,
                        styleClasses: "",
                    },
                ],
            }
        }
    },
    methods: {
        onComplete: function(){
            const params = new URLSearchParams()

            params.append('form-name', 'subscription') // Forms使うのに必要

            params.append('name', this.name)
            params.append('email', this.email)
            params.append('password', this.password)

            axios
                .post('/', params)
                .then((response) => {
                    console.log(response)
                })
           window.location.href = '/thanks'

            //return document.getElementById("subscription").submit();
        },
        validateFirstTab() {
            return this.$refs.firstTabForm.validate();
        },
    }
}
</script>