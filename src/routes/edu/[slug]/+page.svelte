<script>
    export let data;
    const levelStr = data.course.level === "GR" ? "graduate" : "undergraduate";
    const idStr = `${data.course["subject-abbreviation"]} ${data.course.number}`;
    // if the institution abbrev is AHS, change to VT
    if (data.institution.abbreviation === "AHS") {
        data.institution.abbreviation = "VT";
    }
</script>

<main>
    <h1>
        {data.institution.abbreviation}
        {idStr}
        <div class="grade">{data.course.letter}</div>
    </h1>
    <h2>
        {data.course.name}, {data.course.term}
        {data.course.year}
    </h2>

    <h2>
        <!-- {data.institution.name} ({data.institution.abbreviation}) -->
    </h2>
    <p>
        {idStr} was a course taken at the {levelStr} level at {data.institution
            .name} for {data.course?.credits} credit(s) in the
        {data.course.term} term of {data.course.year}.
    </p>
</main>

<!-- 
    //     id: 68,
    //     'institution-id': 3,
    //     'subject-abbreviation': 'CS',
    //     subject: 'Computer Science',
    //     number: 6501,
    //     name: 'Cyber-Physical Systems 2: Advanced Embedded Systems',
    //     letter: 'A-',
    //     credits: 3,
    //     gpa: 3.7,
    //     term: 'Spring',
    //     year: 2023,
    //     level: 'GR'
    //   }
    
    // {
    //     "id": 1,
    //     "abbreviation": "PVCC",
    //     "name": "Piedmont Virginia Community Colllege",
    //     "city": "Charlottesville",
    //     "state": "VA",
    //     "country": "USA",
    //     "level": "2-year"
    // }, -->

<style>
    main {
        padding: 1.5rem;
    }
    .grade {
        display: inline-block;
        background-color: var(--color-scale-green-5);
        width: 4rem;
        height: rem;
        margin: 1rem;
        text-align: center;
        /* text height to middle */
        line-height: 3rem;
    }
</style>
