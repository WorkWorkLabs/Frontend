<template>
  <section id="team" class="team-section">
    <div class="container mx-auto">
      <div class="section-header">
        <h2 class="section-title">We care deeply about the quality of our work</h2>
        <p class="section-description">
          Work Work，Linear has always been a fully remote company. Today, our small but mighty team is distributed across North America and Europe. What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.
        </p>
        <div class="join-us-form">
          <h3 class="form-title">Join us</h3>
          <div class="form-group">
            <input type="email" class="email-input" placeholder="Enter your email" />
            <button type="submit" class="submit-btn">Submit</button>
          </div>
        </div>
      </div>

      <!-- Genesis Team Section -->
      <div class="genesis-team-section">
        <h3 class="genesis-team-title">Genesis Team</h3>
        <div class="genesis-team-image">
          <img src="/images/genesisteam.svg" alt="Genesis Team" />
        </div>
      </div>

      <!-- Team Member Section -->
      <div class="team-member-section">
        <h3 class="team-member-title">Team Member</h3>
        <div class="team-member-content">
          <img src="/images/teammember.svg" alt="Team Member" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// No imports needed for this section
</script>

<style scoped>
.team-section {
  background-color: #00A1FF;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  padding: 2rem 500px 2rem 100px;
}

.section-header {
  @apply text-left mb-16;
}

.section-title {
  @apply text-4xl md:text-5xl font-bold;
  color: #FFFFFF;
  text-align: left;
  margin-bottom: 32px;
}

.section-description {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #FFFFFF;
  text-align: left;
  max-width: none;
}


.join-us-form {
  margin-top: 24px;
}

.form-title {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: left;
}

.form-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.email-input {
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  flex: 1;
  max-width: 300px;
  outline: none;
}

.email-input:focus {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
}

.submit-btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: white;
  color: #00A1FF;
}

.genesis-team-section {
  margin-top: 64px;
}

.genesis-team-title {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0%;
  color: #FFFFFF;
  text-align: left;
  margin-bottom: 24px;
}

.genesis-team-image {
  text-align: left;
}

.genesis-team-image img {
  max-width: 100%;
  height: auto;
}

.team-member-section {
  margin-top: 64px;
}

.team-member-title {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0%;
  color: #FFFFFF;
  text-align: left;
  margin-bottom: 24px;
}

.team-member-content {
  text-align: left;
}

.team-member-content img {
  max-width: 100%;
  height: auto;
}

.text-primary {
  color: #00A1FF;
}
</style>