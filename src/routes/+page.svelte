<!-- +page.svelte -->
<script>
  const sieLink =
    "https://engineering.virginia.edu/departments/systems-and-information-engineering/systems-academic-programs/graduate-degrees/doctor";
  const ghIoLink = "https://njg4ne.github.io/";
  const linkedIn = "https://www.linkedin.com/in/nicholas-gardella-14519618b/";
  const slr = "https://engineering.virginia.edu/faculty/sara-lu-riggs";
  const riggsLab = "https://www.sriggslab.com/";
  const linkLab = "https://engineering.virginia.edu/link-lab";
  const hti =
    "https://engineering.virginia.edu/departments/systems-and-information-engineering/research/human-technology-interaction";
</script>

<div>
  <h1>Nicholas Gardella</h1>
  <p>
    <a href={linkedIn}> Nicholas </a>is a PhD Student in the Department of
    <a href={sieLink}>Systems & Information Engineering</a>
    at University of Virginia. He works under <a href={slr}> Dr. Sara Riggs </a>
    in the <a href={riggsLab}> Riggs Lab</a> within the
    <a href={hti}>Human Systems Engineering</a>
    Research Laboratory at UVA. He is also a member of the
    <a href={linkLab}>Link Lab</a>. To see personal projects and features on
    GitHub, please visit <a href={ghIoLink}>{ghIoLink}</a>
  </p>
  <p>
    Nicholas earned his B.S. in Computer Science from Virginia Tech in 2021 and
    his M.Eng. in Systems Engineering from UVA in 2023. To browse his
    undergraduate and graduate course grades, please navigate to Education.
  </p>
  <p>
    Nicholas is an NSF Graduate Research Fellow, and NSF National Research
    Trainee in Cyber-Physical Systems. His research area is Human-AI interaction
    in computer programming.
  </p>
</div>

<style>
  div {
    background-color: var(--color-canvas-default);
    border: 1px solid var(--color-border-default);
    border-radius: 0.5em;
    margin: 1em;
    padding: 1rem 2rem;
    flex-grow: 0;
  }
</style>
