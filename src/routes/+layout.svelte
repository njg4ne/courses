<script>
    import styles from "../styles.css";
    import { base } from "$app/paths";
</script>

<!-- import styles.css -->
<head>
    <title>njg4ne</title>
    <!-- <base href="/courses" /> -->
    <!-- {#if process.env.NODE_ENV === "development"}
        <base href="/" />
    {:else}
        <base href="https://www.cs.virginia.edu/~njg4ne/" />
    {/if} -->
</head>

<nav>
    <!-- <div class="row"> -->
    <img src="{base}/favicon.png" alt="logo" />
    <div>
        <a href={base}>About</a>
    </div>
    <div>
        <a href="{base}/edu">Education</a>
    </div>
    <!-- </div> -->
</nav>

<slot />

<style>
    div {
        background-color: var(--color-canvas-default);
        border: 1px solid var(--color-border-default);
        /* border-radius: 0.5em; */
        margin: 1em;
        padding: 0.5rem 0.75rem;
        flex-grow: 0;
    }
    nav {
        border-bottom: 1px solid var(--color-border-default);
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }
    /* .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: transparent;
        border-width: 0;
    } */
    img {
        height: 3rem;
        width: 3rem;
        margin: 1rem;
    }
</style>
