import MainLayout from "../layout/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			<div>
				<div className="d-flex justify-content-center align-items-center mx-auto gap-3">
					<img
						src="photo.jpg"
						class="rounded-circle"
						width={"175px"}
						height={"200px"}
					/>
					<div>
						<div class="display-5 mb-3">Nathphong Phongsawaleesri</div>
						<div class="text-muted">
							Hello, my name is Nathaphong. Now I'm studying at Chiang Mai
							University in Computer Engineering.
						</div>
					</div>
				</div>
				<p class="text-center fs-3">MySkill</p>

				<div className="mx-auto" style={{ maxWidth: "700px" }}>
					<div className="d-flex border rounded-4 mb-3 shadow-sm ">
						<div class="rounded-4">
							<img src="/programming.jpg" width="150px" height="150px"></img>
						</div>
						<div class="p-4">
							<p class="fw-semibold fs-5">Programming</p>
							<span class="text-muted">
								I am interested in programming, so I studied the basics of it.
								like C++ and Python.
							</span>
						</div>
					</div>
					<div className="d-flex border rounded-4 mb-3 shadow-sm ">
						<div class="rounded-4">
							<img src="/language.jpg" width="150px" height="150px"></img>
						</div>
						<div class="p-4">
							<p class="fw-semibold fs-5">Language</p>
							<span class="text-muted">
								I am learning various languages, like English, Chinese, and
								Japanese, so I can understand them a bit.
							</span>
						</div>
					</div>
					<div className="d-flex border rounded-4 mb-3 shadow-sm ">
						<div class="rounded-4">
							<img src="/reading.jpg" width="150px" height="150px"></img>
						</div>
						<div class="p-4">
							<p class="fw-semibold fs-5">My Hobby</p>
							<span class="text-muted">
								My hobby is reading novels and books. I love to read in a quiet
								place where I can spend all day reading.
							</span>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
