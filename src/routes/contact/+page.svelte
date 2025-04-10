<script>
  import { Linkedin, Github, Mail } from 'lucide-svelte';
</script>

<div class="relative bg-black text-white">
  <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <!-- Left column with content -->
    <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-24 xl:col-span-6">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
          Contact & Professional Background
        </h1>

        <div class="space-y-8">
          <!-- Current Role -->
          <section>
            <h2 class="text-2xl font-semibold mb-3">Current Role</h2>
            <div class="bg-gray-900/50 rounded-lg p-4">
              <h3 class="text-xl font-medium">Deal Desk Analyst</h3>
              <p class="text-gray-300">Meltwater • November 2024 - Present</p>
              <p class="mt-2">Transforming Data to Impact</p>
            </div>
          </section>

          <!-- Professional Experience -->
          <section>
            <h2 class="text-2xl font-semibold mb-3">Professional Experience</h2>
            <div class="space-y-4">
              <div class="bg-gray-900/50 rounded-lg p-4">
                <h3 class="text-xl font-medium">Everphone</h3>
                <div class="space-y-3">
                  <div>
                    <h4 class="text-lg font-medium">Sales Operations Specialist</h4>
                    <p class="text-gray-300">January 2024 - October 2024</p>
                    <p>Focus: Revenue Analysis and Operational Excellence</p>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium">Senior Sales Development Representative</h4>
                    <p class="text-gray-300">March 2023 - October 2024</p>
                    <ul class="list-disc list-inside mt-2 text-gray-300">
                      <li>Improved sales development processes</li>
                      <li>Optimized outreach techniques</li>
                      <li>Expertise in Sales Processes and Salesforce CRM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- About Me -->
          <section>
            <h2 class="text-2xl font-semibold mb-3">About Me</h2>
            <div class="bg-gray-900/50 rounded-lg p-4">
              <p class="text-base leading-7">
                I'm a sales expert and entry-level data professional with over five years of experience in sales and customer management. 
                My passion for bridging cultures and technologies stems from growing up in an exciting environment that blends Berlin and my Vietnamese heritage.
              </p>
              <p class="text-base leading-7 mt-3">
                My motto: "Achieving more and embracing better challenges" is not just a saying; it's a guiding principle in both life and work.
              </p>
            </div>
          </section>

          <!-- Connect -->
          <section>
            <h2 class="text-2xl font-semibold mb-3">Connect With Me</h2>
            <div class="bg-gray-900/50 rounded-lg p-4">
              <div class="flex flex-row space-x-4">
                <a href="https://www.linkedin.com/in/dang-trang/" 
                   class="inline-flex items-center"
                   target="_blank"
                   rel="noopener noreferrer">
                  <Linkedin color="#FFFFFF" class="w-8 h-8 hover:stroke-neongreen hover:scale-125 transition-all"/>
                </a>

                <a href="https://github.com/trangdangberlin" 
                   class="inline-flex items-center"
                   target="_blank"
                   rel="noopener noreferrer">
                  <Github color="#FFFFFF" class="w-8 h-8 hover:stroke-neongreen hover:scale-125 transition-all"/>
                </a>

                <a href="mailto:da.trang91@yahoo.de"
                   class="inline-flex items-center"
                   target="_blank"
                   rel="noopener noreferrer">
                  <Mail color="#FFFFFF" class="w-8 h-8 hover:stroke-neongreen hover:scale-125 transition-all"/>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Right column with image -->
    <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
      <img
        class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
        src="/digital_rain.gif"
        alt="Background animation"
      />
    </div>
  </div>
</div>
