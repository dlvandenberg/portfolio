<script>
  let person = {
    "firstName": "Dennis",
    "lastName": "van den Berg",
    "dateOfBirth": "14-10-1989",
    "gender": "Gender.MALE",
    "nationality": "Dutch",
    "email": "dennis\@devd.be",
    "married": true,
    "offspring": 2,
    "pets": [
      {
        "type": "Dog",
        "race": "Pomsky"
      }
    ]
  }
</script>

<section class="section-container">
  <h1 class="section-title">$ whoami</h1>
  <div class="section-content">
    <div class="section-col outline">
      <p>{JSON.stringify(person, null, 2)}</p>
    </div>
    <div class="section-col">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore numquam nobis, consectetur quasi dolorum necessitatibus eius asperiores repudiandae explicabo, praesentium exercitationem deleniti sapiente accusamus repellat eveniet, modi aperiam architecto? 
        Voluptatum!</p>
    </div>
  </div>
</section>

<style lang="scss">
  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    font-size: xx-large;
    font-weight: 100;
    padding-bottom: .5rem;
    color: $color-sand-100;

    &::first-letter {
      color: $color-sand-500;
    }
  }

  .section-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .section-col {
    width: 100%;
    background-color: $color-sand-500;
    border: 1px solid $color-sand-100;
    padding: 1rem;

    p {
      font-weight: 200;
      font-size: small;
    }

    &.outline {
      background-color: $color-coffee;
    }
  }
</style>