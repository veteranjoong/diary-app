<script>
  import { deleteDiary } from "$lib/store/store";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
  export let diary = [];
</script>

<div class="btns">
  {#if !$page.url.pathname.startsWith("/edit")}
    <button 
      class="btn" 
      on:click={() => goto(`/edit/${diary.id}`)}
    >
      <Icon icon="uil:pen" width="24" height="24" style="color: #444;" />
    </button>
  {/if}
  <button 
    class="btn" 
    on:click={
      async () => {
        await deleteDiary(diary.id); 
        // goto('/');
        location.reload(); // 페이지 새로고침
      }
    }
  >
    <Icon icon="ic:baseline-delete" width="24" height="24" style="color: #f80;" />
  </button>
</div>