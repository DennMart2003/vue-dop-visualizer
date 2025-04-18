<template>
    <Navbar />
    <div class="container mt-5">
        <div class="row">
            <div class="col">

                <div class="card text-bg-dark mb-3">
                    <div class="card-header">
                        <h1>About Satellite Visualizer</h1>
                    </div>
                    <div class="card-body">

                        <div class="card-text">
                            <b>Satellite Visualizer</b> is a web application designed to visualize a GPS performance
                            metric known as Dilution of Precision (DOP).
                            DOP is a geometric measure that reflects the accuracy of GPS satellite positioning. Lower
                            DOP values indicate better positioning accuracy.
                            Our tool helps explore how GPS precision varies across the globe at different points in
                            time.
                            <hr>    
                            The application allows users to:
                            <ul>
                                <li>Select a specific <b>date and time</b> using a built-in date picker.</li>
                                <li>View a world map visualization that shows PDOP (Position DOP) values at each
                                    location.</li>
                                <li>Zoom in and out to explore different regions.</li>
                                <li><b>Click</b> on regions to view detailed PDOP values.</li>
                            </ul>
                            DOP data is generated using satellite almanac files from <a
                                href="https://www.navcen.uscg.gov/gps-nanus-almanacs-opsadvisories-sof" target="_blank"
                                rel="noopener noreferrer">NAVCEN (U.S. Coast Guard Navigation Center)</a>,
                            processed by custom Python scripts, and stored in an <b>InfluxDB v1.8</b> database. The backend is
                            built using <b>FastAPI</b>, and the frontend utilizes <b>Vue.js</b> and
                            <b>Leaflet.js</b>.
                            
                            <br>
                            <h5 class="mt-4">Technologies Used</h5>
                            <ul>
                                <li><b>Vue.js, Leaflet,</b> and <b>JavaScript</b> for frontend</li>
                                <li><b>FastAPI, Python,</b> and <b>InfluxDB</b> for backend</li>
                                <li><b>GitHub</b> for collaborative development and version control.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    <MainFooter />
</template>

<script setup>

import Navbar from "@/components/MainNavbar.vue"
import MainFooter from "@/components/MainFooter.vue"

</script>

<style lang="scss" scoped></style>