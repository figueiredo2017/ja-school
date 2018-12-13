<template>

<div class="container">

    <form-wizard @on-complete="onComplete" 
                    title="Join Now"
                    subtitle="Sub-title line"
                    shape="square"
                    color="#3498db">
        <tab-content title="Personal details"
                        icon="ti-user"
                        :before-change="validateFirstTab">
            My first tab content
            <vue-form-generator :model="model"
                    :schema="firstTabSchema"
                    :options="formOptions"
                    ref="firstTabForm">
            </vue-form-generator>
        </tab-content>
        <tab-content title="Additional Info"
                        icon="ti-settings">
            My second tab content
        </tab-content>
        <tab-content title="Last step"
                        icon="ti-check">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
    </form-wizard>
 </div>


</template>
<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import VueFormGenerator from "vue-form-generator";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

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
                contributionPlan: "",
                postMethod: "",
                followersNumber: "",
                numberPeople: "",
                peopleInGroup: "",
                valuePerPerson: "",
                proposedHeading: "",
                caseDescription: "",
                product: "",
                thumbnailImage: "",
                referenceImage: "",
                postingNotes: "",
                specifiedUrl: "",
                shootingInstruction: "",
                shootingSample: "",
                hashtag: "",
                hashtagSetting: "",
                nationality: "",
                minimumAge: "",
                maximumAge: "",
                specificGender: "",
                area: "",
                recruitmentStartDate: "",
                recruitmentEndDate: "",
                selectionPeriodDate: "",
                experienceStartDate: "",
                supplementExperienceDate: "",
                snsStartDate: "",
                snsEndDate: "",
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
                        label: "E-mail",
                        model: "email",
                        required: true,
                        validator: VueFormGenerator.validators.email,
                        styleClasses: "",
                    },
                    {
                    type: "radios",
                    label: "投稿方法",
                    model: "postMethod",
                    required: true,
                    values: [ "通常", "ストーリー", "カルーセル"],
                    validator: VueFormGenerator.validators.required,
                    styleClasses: "form-radio",
                    },
                ],
            }
        }
    },
    methods: {
        onComplete: function(){
            alert('Yay. Done!');
        },
        validateFirstTab() {
            return this.$refs.firstTabForm.validate();
        },
    }
}
</script>