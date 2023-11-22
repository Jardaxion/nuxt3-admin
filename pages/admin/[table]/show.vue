<template lang="">
    <NuxtLayout name="admin">
        <section class="tablePage">
            <div class="container">
                <div class="tablePage__inner">
                    <div class="tablePage__top d-flex justify-content-between align-items-center">
                        <p class="tablePage__title text-white fs-2">{{ route.params.table }}</p>
                        <nuxt-link class="btn btn-primary me-2" :to="'add'">Добавить</nuxt-link>
                    </div>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Название</th>
                                <th>Ссылка</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>Товары</th>
                                <th>/products/show</th>
                                <th>
                                    <UTooltip text="Редактирование">
                                        <nuxt-link class="btn btn-primary me-2" to="1/edit">
                                            <i class="fa-solid fa-pen" style="color: #ffffff;"></i>
                                        </nuxt-link>
                                    </UTooltip>
                                    <UTooltip text="Удалить">
                                        <nuxt-link @click.prevent="showAlert()" class="btn btn-danger tablePage__delete me-2" to="">
                                            <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
                                        </nuxt-link>
                                    </UTooltip>
                                    <UTooltip text="Просмотр">
                                        <nuxt-link class="btn btn-success" to="1/show">
                                            <i class="fa-regular fa-eye" style="color: #ffffff;"></i>
                                        </nuxt-link>
                                    </UTooltip>
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
    const toast = useToast();

    let showAlert = ():void => {
        swal.fire({
            title: "Вы точно хотите удалить этот элемент?",
            text: "Вы не сможете вернуть данные",
            icon: "warning",
            confirmButtonText: "Да",
            denyButtonText: "Нет",
            showDenyButton: true,
        }).then((res) => {
            if(res.isDenied){
                swal.close();
            } else {
                swal.close();
                swal.fire({
                    title: "Удаление произошло успешно",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
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