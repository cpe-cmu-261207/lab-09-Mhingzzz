import React from "react";
import MainLayout from "../layout/MainLayout";

export default function contact() {
	return (
		<MainLayout>
			<div className="d-fex text-center" style={{ maxwidth: "600px" }}>
				<p className="fw-bold fs-5  mx-auto">Contact Me</p>
				<div
					class="mx-auto d-flex justify-contents-center align-items-center gap-3"
					style={{ maxwidth: "600px" }}
				>
					<img
						src="photo.jpg"
						class="rounded-circle"
						width={"175px"}
						height={"200px"}
					/>
					<div class="vstack gap-2">
						<div className="d-flex">
							<div class="fw-semibold" style={{ minWidth: "100px" }}>
								Name:
							</div>
							<span class="text-muted">Nathaphong Phongsawaleesri</span>
						</div>
						<div className="d-flex">
							<div class="fw-semibold" style={{ minWidth: "100px" }}>
								Nickname:
							</div>
							<span class="text-muted">Mhing</span>
						</div>

						<div className="d-flex">
							<div class="fw-semibold" style={{ minWidth: "100px" }}>
								Address:
							</div>
							<span class="text-muted">
								148 Village No.14 Sub-area.Suthep District MuangChaingMai
								Province ChiangMai Postal Code 50200 Apt.The Gallery Hill
							</span>
						</div>
						<div className="d-flex">
							<div class="fw-semibold" style={{ minWidth: "100px" }}>
								Facebook:
							</div>
							<span class="text-muted">
								<a
									href="https://www.facebook.com/natthapong.pongsawaleesri"
									target="_blank"
									rel="noreferrer"
								>
									https://www.facebook.com/natthapong.pongsawaleesri
								</a>
							</span>
						</div>
						<div className="d-flex">
							<div class="fw-semibold" style={{ minWidth: "100px" }}>
								Email:
							</div>
							<span class="text-muted">
								<a href="mailto:nathaphong_p@cmu.ac.th">
									nathaphong_p@cmu.ac.th
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
