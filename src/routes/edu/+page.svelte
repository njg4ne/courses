<script>
    export let data;
    import { Tooltip } from "@svelte-plugins/tooltips";
    import { base } from "$app/paths";
</script>

<h1>Education</h1>
<div><a href="./{1}/">Test</a></div>

<div>
    <table>
        <thead>
            <tr>
                <th>Course</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr />
            {#each data.courses as course}
                <tr>
                    <td>
                        <Tooltip content={course.name} position="left">
                            <a href="{base}/edu/{course.id}/">
                                {course["subject-abbreviation"]}
                                {course.number}
                            </a>
                        </Tooltip>
                    </td>
                    <td>{course.letter}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    div {
        border-radius: 0%;
        padding: 0;
        border: 0;
        background-color: var(--color-canvas-default);
    }
    table {
        border-collapse: collapse;
    }

    th,
    td {
        padding: 1rem;
    }
    td,
    tr,
    th {
        border: 1px solid var(--color-border-default);
    }

    tr:nth-child(even) {
        background-color: var(--color-canvas-subtle);
    }
</style>
