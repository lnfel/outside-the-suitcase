<script>
    import { page } from "$app/stores"
</script>

<h3 class="crimson-text-bold text-tuscany-600 dark:text-tuscany-300 text-5xl px-10 md:px-0">{ $page.status } { $page.error?.message }</h3>