<script>
    let { class: className = "" } = $props()
</script>

<!-- See tailwind.config.js -->
<div class="spinner animate-loading-spin {className}"></div>

<style>
    .spinner {
        width: 30px;
        height: 30px;
        border: 3px solid #b55829;
    }
</style>
