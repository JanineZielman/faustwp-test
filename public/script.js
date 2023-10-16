{
    const src = 'http://vvv.philip-ullrich.de/tmp/fails_and_errors/Anna_Barham-ZYX.mp3';

    const css = `
	.DN--play-btn {
		display: block;
		appearance: none;
		border: none;
		background-color: transparent;
		font: inherit;
		text-decoration: underline;
		color: inherit;
		cursor: pointer;
	}

	.DN--play-btn svg {
		margin-top: 1em;
	}

	.DN--audio-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: black;
		z-index: 999;
	}

	.DN--audio-container.is-hidden {
		display: none;
	}

	.DN--audio-container audio {
		width: calc(100% - 40px);
		max-width: 800px;
	}

	.DN--close {
		appearance: none;
		position: fixed;
		top: 15px;
		right: 15px;
		width: 24px;
		height: 24px;
		border: none;
		background-color: transparent;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22' xml:space='preserve'%3E%3Cpath d='M11.7 10.9 22 21.2l-.8.8-10.3-10.3L.7 22l-.7-.7L10.3 11-.1.7.6 0l10.3 10.3L21.2-.1l.8.8-10.3 10.2z' fill='%23fff'/%3E%3C/svg%3E%0A");
		cursor: pointer;
	}

	.DN--endnotes-btn {
		display: block;
		margin-top: 3em;
		appearance: none;
		border: none;
		background-color: transparent;
		font: inherit;
		text-decoration: underline;
		color: var(--issue-text-color, white) !important;
		cursor: pointer;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s;
	}

	.DN--audio-container.is-finished .DN--endnotes-btn {
		opacity: 1;
		visibility: unset;
	}

	.DN--endnotes {
		display: none;
	}
	`;

    const template = `
		<div class="DN--audio-container article__text text--large is-hidden">
			<audio src="${src}" autoplay controls preload="auto"></audio>

			<button class="DN--endnotes-btn" type="button">
				Show endnotes
			</button>

			<button class="DN--close" type="button"></button>
		</div>
	`;

    document.head.insertAdjacentHTML(
        'beforeend',
        `<style>${css}</style>`
    );
    let container;

    const isEnded =
        window.localStorage.getItem('DN_zyx-finished') === 'true';

    const onEndnotesBtnClick = event => {
        if (!event.target.classList.contains('DN--endnotes-btn')) {
            return;
        }

        showEndnotes(true);
        closeOverlay();
    };

    const onCloseBtnClick = event => {
        if (!event.target.classList.contains('DN--close')) {
            return;
        }

        closeOverlay();
    };

    const showEndnotes = (scrollTo = false) => {
        const endnotes = document.querySelector('.DN--endnotes');
        endnotes.style.display = 'unset';

        if (scrollTo) {
            requestAnimationFrame(() => {
                endnotes.scrollIntoView();
            });
        }
    };

    const createContainer = () => {
        document.body.insertAdjacentHTML('beforeend', template);
        container = document.querySelector('.DN--audio-container');
        container.addEventListener('click', onEndnotesBtnClick);
        container.addEventListener('click', onCloseBtnClick);
    };

    const showLink = () => {
        window.localStorage.setItem('DN_zyx-finished', 'true');
        container && container.classList.add('is-finished');
    };

    const closeOverlay = () => {
        const player = container.querySelector('audio');

        player.pause();
        container.classList.add('is-hidden');
        document.documentElement.style.overflow = '';
        document.documentElement.style.height = '';
    };

    const showOverlay = () => {
        if (!container) {
            createContainer();
        }

        container.classList.remove('is-hidden');
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100%';

        const player = container.querySelector('audio');

        // Show end link only on first end
        if (isEnded) {
            showLink();
        } else if (player) {
            player.addEventListener('ended', e => {
                showLink();
            });
        }

        player.play();
    };

    window.DN = {
        zyx: {
            onClick: showOverlay
        }
    };

    if (isEnded) {
        showEndnotes();
    }
}