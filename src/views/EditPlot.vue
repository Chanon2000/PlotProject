<template>
    <form>
        <div class="form-pad">
            <!-- TitleDeed -->
            <v-text-field
            filled
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            >
                
            </v-text-field>

            <!-- Address -->
            <v-text-field
                
            >
                
            </v-text-field>

            <!-- Category -->
            <v-text-field>
                
            </v-text-field>

            <!-- detail -->
            <v-text-field>
                
            </v-text-field>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>