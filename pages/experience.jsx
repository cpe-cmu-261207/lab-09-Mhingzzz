import React from "react";
import MainLayout from "../layout/MainLayout";

export default function experience() {
	return (
		<MainLayout>
			<div className="mx-auto" style={{ maxWidth: "700px" }}>
				<div className="d-flex border rounded-4 mb-3 shadow-sm ">
					<div class="rounded-4">
						<img src="/programming.jpg" width="150px" height="150px"></img>
					</div>
					<div class="p-4">
						<p class="fw-semibold fs-5">Hotel Reservation Project</p>
						<span class="text-muted">
							A C++ program that displays the results in a terminal.
						</span>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
