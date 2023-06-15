<template lang="">
    <NuxtLayout name="admin">
        <section class="tablePage">
            <div class="container">
                <div class="tablePage__inner">
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>
                                    <nuxt-link class="btn btn-primary me-2" to="">Редактировать</nuxt-link>
                                    <nuxt-link @click.prevent="showAlert()" class="btn btn-danger tablePage__delete" to="">Удалить</nuxt-link>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
<script setup lang="ts">
    import swal from 'sweetalert2';
    const route: any = useRoute();

    let showAlert = ():void => {
        swal.fire({
            title: "Вы точно хотите удалить этот элемент?",
            text: "Вы не сможете вернуть данные",
            icon: "warning",
            confirmButtonText: "Да",
            denyButtonText: "Нет"
        }).then((res) => {
            if(res.isDenied){
                swal.close();
            } else {
                swal.close();
                swal.fire({
                    title: "Удаление произошло успешно",
                    icon: "success"
                })
            }
        });
    }
</script>
<style lang="scss">
    .tablePage *{
        transition: .3s ease all;
    }

    .tablePage{
        &__delete{
            &:hover{
                background: #852d36;
                border-color: #852d36;
            }
        }
    }
</style>